import { test, expect } from "@playwright/test";

test.describe("PurposePath site", () => {
  test("primary navigation routes to key pages", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Illustration Marketplace" }))
      .toBeVisible();

    await page.getByRole("link", { name: "Skill Offers" }).click();
    await expect(page.getByRole("heading", { name: "Skill Offers" }))
      .toBeVisible();

    await page.getByRole("navigation").getByRole("link", { name: "Contact" }).click();
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();

    await page.getByRole("link", { name: "Illustration Marketplace" }).click();
    await expect(page.getByRole("heading", { name: "In Dev" })).toBeVisible();
  });

  test("forms are wired and required fields exist", async ({ page }) => {
    await page.goto("/contact-us");
    await expect(page.getByRole("textbox", { name: "Name" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email", exact: true })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Message" })).toBeVisible();

    const contactFormAction = await page.locator("form").first().getAttribute("action");
    expect(contactFormAction).toContain("formspree.io");

    await page.goto("/");
    const subscribeFormAction = await page.locator("footer form").getAttribute("action");
    expect(subscribeFormAction).toBe("/api/subscribe");
  });

  test("subscribe form shows inline success and error states", async ({ page }) => {
    await page.route("**/api/subscribe", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ message: "Thanks for subscribing!" }),
      });
    });

    await page.goto("/");

    const emailInput = page.getByRole("textbox", { name: "Your Email" });
    const subscribeButton = page.getByRole("button", { name: "Subscribe" });

    await subscribeButton.click();
    await expect(page.getByText("Please enter your email.")).toBeVisible();

    await emailInput.fill("founder@purposepath.ai");
    await subscribeButton.click();
    await expect(page.getByText("Thanks for subscribing!")).toBeVisible();

    await page.unroute("**/api/subscribe");
    await page.route("**/api/subscribe", async (route) => {
      await route.fulfill({
        status: 502,
        contentType: "application/json",
        body: JSON.stringify({ message: "Unable to subscribe right now. Please try again." }),
      });
    });

    await emailInput.fill("retry@purposepath.ai");
    await subscribeButton.click();
    await expect(page.getByText("Unable to subscribe right now. Please try again.")).toBeVisible();
  });

  test("hero video sound controls and media-priority behavior work", async ({ page }) => {
    await page.goto("/");

    const heroVideo = page.getByLabel("PurposePath story reel");
    const audioToggle = page.locator(".hero-audio-toggle");

    await expect(heroVideo).toBeVisible();
    await expect(audioToggle).toBeVisible();
    await expect
      .poll(async () => heroVideo.evaluate((video) => Number(video.volume.toFixed(2))))
      .toBe(0.5);
    await expect
      .poll(async () => heroVideo.evaluate((video) => video.paused))
      .toBe(false);

    const initialMuted = await heroVideo.evaluate((video) => video.muted);
    await audioToggle.click();
    await expect
      .poll(async () => heroVideo.evaluate((video) => video.muted))
      .toBe(!initialMuted);

    // Re-enable sound and then trigger "other media played" behavior.
    await heroVideo.evaluate((video) => {
      video.muted = false;
    });

    await page.evaluate(() => {
      const media = document.createElement("audio");
      document.body.appendChild(media);
      media.dispatchEvent(new Event("play", { bubbles: true }));
    });

    await expect
      .poll(async () => heroVideo.evaluate((video) => video.muted))
      .toBe(true);

    await heroVideo.evaluate((video) => {
      video.pause();
    });

    await expect
      .poll(async () => heroVideo.evaluate((video) => video.paused))
      .toBe(false);
  });

  test("hero shows fallback when video fails to load", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("PurposePath story reel").evaluate((video) => {
      video.dispatchEvent(new Event("error"));
    });

    await expect(page.getByLabel("PurposePath hero fallback")).toBeVisible();
    await expect(page.locator(".hero-audio-toggle")).toHaveCount(0);
  });

  test("mobile viewport keeps hero controls and subscribe CTA visible", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const heroShell = page.locator(".hero-video-shell");
    const audioToggle = page.locator(".hero-audio-toggle");
    const subscribeButton = page.getByRole("button", { name: "Subscribe" });

    await expect(heroShell).toBeVisible();
    await expect(audioToggle).toBeVisible();
    await subscribeButton.scrollIntoViewIfNeeded();
    await expect(subscribeButton).toBeVisible();

    const shellBox = await heroShell.boundingBox();
    const toggleBox = await audioToggle.boundingBox();

    expect(shellBox).not.toBeNull();
    expect(toggleBox).not.toBeNull();

    if (shellBox && toggleBox) {
      expect(toggleBox.x).toBeGreaterThanOrEqual(shellBox.x);
      expect(toggleBox.y).toBeGreaterThanOrEqual(shellBox.y);
      expect(toggleBox.x + toggleBox.width).toBeLessThanOrEqual(
        shellBox.x + shellBox.width,
      );
      expect(toggleBox.y + toggleBox.height).toBeLessThanOrEqual(
        shellBox.y + shellBox.height,
      );
    }
  });

  test("holographic button animations keep seamless loop endpoints", async ({ page }) => {
    await page.goto("/");

    const holoStyles = await page.evaluate(() => {
      const sheetTexts: string[] = [];
      for (const styleSheet of Array.from(document.styleSheets)) {
        const cssRules = (styleSheet as CSSStyleSheet).cssRules;
        if (!cssRules) continue;
        for (const rule of Array.from(cssRules)) {
          sheetTexts.push(rule.cssText);
        }
      }
      return sheetTexts.join("\n");
    });

    expect(holoStyles).toContain("@keyframes holoBorderFlow");
    expect(holoStyles).toContain("@keyframes holoGlowFlow");
    expect(holoStyles).toMatch(/background-position:\s*0%\s*center,\s*100%\s*center/);
    expect(holoStyles).toMatch(/background-position:\s*100%\s*center,\s*0%\s*center/);
    expect(holoStyles).toContain("/ 250% 250%");
    expect(holoStyles).toContain("/ 220% 220%");

    const animationMeta = await page.locator(".button").first().evaluate((button) => {
      const before = getComputedStyle(button, "::before");
      const after = getComputedStyle(button, "::after");
      return {
        beforeName: before.animationName,
        beforeDirection: before.animationDirection,
        afterName: after.animationName,
        afterDirection: after.animationDirection,
      };
    });

    expect(animationMeta.beforeName).toContain("holoBorderFlow");
    expect(animationMeta.afterName).toContain("holoGlowFlow");
    expect(animationMeta.beforeDirection).toContain("alternate");
    expect(animationMeta.afterDirection).toContain("alternate");
  });

  test("scroll reveal elements include shimmer sweep on revealed state", async ({ page }) => {
    await page.goto("/");

    const shimmerStyles = await page.evaluate(() => {
      const sheetTexts: string[] = [];
      for (const styleSheet of Array.from(document.styleSheets)) {
        const cssRules = (styleSheet as CSSStyleSheet).cssRules;
        if (!cssRules) continue;
        for (const rule of Array.from(cssRules)) {
          sheetTexts.push(rule.cssText);
        }
      }
      return sheetTexts.join("\n");
    });

    expect(shimmerStyles).toContain("@keyframes revealShimmerSweep");
    expect(shimmerStyles).toContain(".scroll-reveal.revealed::after");
    expect(shimmerStyles).toContain(".stagger-container .stagger-item.revealed::after");
    expect(shimmerStyles).toContain("running revealShimmerSweep");
  });
});
