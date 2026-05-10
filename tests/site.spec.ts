import { test, expect } from "@playwright/test";

const formspreeSubscribeRoute = /https:\/\/formspree\.io\/f\/.*/;

test.describe("PurposePath site", () => {
  test("primary navigation routes to key pages", async ({ page }) => {
    await page.goto("/");
    const homeLogo = page.getByRole("link", { name: "PurposePath home" });
    await expect(homeLogo).toBeVisible();
    await expect(homeLogo.locator("img")).toHaveAttribute("src", /purposepath-mark-matte\.png/);
    await expect(page.getByRole("navigation").getByRole("link", { name: "RouteForge" }))
      .toBeVisible();

    await page.getByRole("link", { name: "Skill Offers" }).click();
    await expect(page.getByRole("heading", { name: "Skill Offers" }))
      .toBeVisible();

    await page.getByRole("navigation").getByRole("link", { name: "Contact" }).click();
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();

    await page.getByRole("navigation").getByRole("link", { name: "RouteForge" }).click();
    await expect(
      page.getByRole("heading", {
        name: "License styles. Train legally. Ship faster.",
      }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "What RouteForge is for" })).toBeVisible();
  });

  test("legacy illustration path redirects to canonical RouteForge page", async ({ page }) => {
    await page.goto("/illistration-market");
    await expect(page).toHaveURL(/\/illustration-market\/?$/);
    await expect(page.getByRole("heading", { name: "What RouteForge is for" })).toBeVisible();
  });

  test("waiting list CTA jumps to subscribe form at page bottom", async ({ page }) => {
    await page.goto("/illustration-market");

    await page
      .getByRole("link", { name: "[Subscribe to join the waiting list]" })
      .click();

    const subscribeSection = page.locator("#waitlist-subscribe");
    const subscribeButton = page
      .locator("#waitlist-subscribe")
      .getByRole("button", { name: "Subscribe" });
    const emailInput = page
      .locator("#waitlist-subscribe")
      .getByRole("textbox", { name: "Your Email" });

    await expect(subscribeSection).toBeInViewport();
    await expect(emailInput).toBeVisible();
    await expect(subscribeButton).toBeVisible();
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
    expect(subscribeFormAction).toContain("formspree.io/f/");
  });

  test("contact founder image uses uncropped contain sizing", async ({ page }) => {
    await page.goto("/contact-us");

    const founderImage = page.locator('img[alt="Founder portrait"]');
    await expect(founderImage).toBeVisible();
    await expect(founderImage).toHaveAttribute(
      "src",
      /READY%202%20GO\.jpg$/,
    );

    const computed = await founderImage.evaluate((img) => {
      const style = getComputedStyle(img);
      return {
        objectFit: style.objectFit,
        height: style.height,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      };
    });

    expect(computed.objectFit).toBe("contain");
    expect(computed.height).not.toBe("550px");
    expect(computed.naturalWidth).toBeGreaterThan(0);
    expect(computed.naturalHeight).toBeGreaterThan(0);
  });

  test("subscribe form shows inline success and error states", async ({ page }) => {
    await page.route(formspreeSubscribeRoute, async (route) => {
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

    await page.unroute(formspreeSubscribeRoute);
    await page.route(formspreeSubscribeRoute, async (route) => {
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
    await expect
      .poll(async () => heroVideo.evaluate((video) => video.muted))
      .toBe(true);

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
    expect(holoStyles).toContain("@keyframes goldSurfaceFlow");
    expect(holoStyles).toMatch(/background-position:\s*0%\s*center,\s*100%\s*center/);
    expect(holoStyles).toMatch(/background-position:\s*200%\s*center,\s*300%\s*center/);
    expect(holoStyles).toContain("/ 300% 300%");
    expect(holoStyles).toContain("/ 280% 280%");

    const animationMeta = await page.locator(".button").first().evaluate((button) => {
      const before = getComputedStyle(button, "::before");
      const after = getComputedStyle(button, "::after");
      return {
        beforeName: before.animationName,
        beforeDirection: before.animationDirection,
        buttonAnimation: getComputedStyle(button).animationName,
        afterContent: after.content,
      };
    });

    expect(animationMeta.beforeName).toContain("holoBorderFlow");
    expect(animationMeta.beforeDirection).toContain("normal");
    expect(animationMeta.buttonAnimation).toContain("goldSurfaceFlow");
    expect(animationMeta.afterContent).toBe("none");
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
    expect(shimmerStyles).toContain(".stagger-container .stagger-item:not(.card).revealed::after");
    expect(shimmerStyles).toContain(".stagger-container .stagger-item.card::after");
    expect(shimmerStyles).toContain(".hero-video-shell::after");
    expect(shimmerStyles).toContain(".nav::after");
    expect(shimmerStyles).toContain(".section-prism-warm::after");
    expect(shimmerStyles).toContain("running revealShimmerSweep");
    expect(shimmerStyles).toContain("@keyframes cardShadowDrift");
    expect(shimmerStyles).toContain(".card-soft");
    expect(shimmerStyles).toContain(".card-holo");
  });

  test("brand shimmer palette stays within the gold logo range", async ({ page }) => {
    await page.goto("/");

    const palette = await page.evaluate(() => {
      const rootStyles = getComputedStyle(document.documentElement);
      return {
        goldBase: rootStyles.getPropertyValue("--gold-base"),
        goldDeep: rootStyles.getPropertyValue("--gold-deep"),
        rainbowTextLoop: rootStyles.getPropertyValue("--rainbow-text-loop"),
        cardSpectrum: rootStyles.getPropertyValue("--card-holo-spectrum-loop"),
      };
    });

    expect(palette.goldBase.trim()).toBe("#ddc58a");
    expect(palette.goldDeep.trim()).toBe("#c2ac84");
    expect(palette.rainbowTextLoop).toContain("#0e0f11");
    expect(palette.rainbowTextLoop).toContain("#23221f");
    expect(palette.rainbowTextLoop).toContain("#ddc58a");
    expect(palette.cardSpectrum).toContain("#ddc58a");
    expect(palette.cardSpectrum).toContain("#c2ac84");
    expect(palette.cardSpectrum).not.toContain("#6eb7ff");
    expect(palette.cardSpectrum).not.toContain("#d786ff");
  });

  test("services page maps soft and holo card variants correctly", async ({ page }) => {
    await page.goto("/services");

    const offerCards = page.locator(".card.card-soft.stagger-item");
    await expect(offerCards).toHaveCount(4);

    const testimonialCard = page.locator(".card.card-holo.review-card");
    await expect(testimonialCard).toHaveCount(2);
  });

  test("card variants keep holographic shadow inside bounds with correct intensity", async ({ page }) => {
    await page.goto("/services");

    const cardStyles = await page.evaluate(() => {
      const softCard = document.querySelector(".card.card-soft");
      const holoCard = document.querySelector(".card.card-holo");
      if (!softCard || !holoCard) return null;

      const sheetTexts: string[] = [];
      for (const styleSheet of Array.from(document.styleSheets)) {
        const cssRules = (styleSheet as CSSStyleSheet).cssRules;
        if (!cssRules) continue;
        for (const rule of Array.from(cssRules)) {
          sheetTexts.push(rule.cssText);
        }
      }

      return {
        softOverflow: getComputedStyle(softCard).overflow,
        holoOverflow: getComputedStyle(holoCard).overflow,
        softBeforeOpacity: getComputedStyle(softCard, "::before").opacity,
        softAfterOpacity: getComputedStyle(softCard, "::after").opacity,
        holoBeforeOpacity: getComputedStyle(holoCard, "::before").opacity,
        holoAfterOpacity: getComputedStyle(holoCard, "::after").opacity,
        softBeforeInset: getComputedStyle(softCard, "::before").inset,
        softAfterInset: getComputedStyle(softCard, "::after").inset,
        holoBeforeInset: getComputedStyle(holoCard, "::before").inset,
        holoAfterInset: getComputedStyle(holoCard, "::after").inset,
        softBeforeZ: getComputedStyle(softCard, "::before").zIndex,
        softAfterZ: getComputedStyle(softCard, "::after").zIndex,
        holoBeforeZ: getComputedStyle(holoCard, "::before").zIndex,
        holoAfterZ: getComputedStyle(holoCard, "::after").zIndex,
        softBeforeAnimation: getComputedStyle(softCard, "::before").animationName,
        softAfterAnimation: getComputedStyle(softCard, "::after").animationName,
        holoBeforeAnimation: getComputedStyle(holoCard, "::before").animationName,
        holoAfterAnimation: getComputedStyle(holoCard, "::after").animationName,
        cssText: sheetTexts.join("\n"),
      };
    });

    expect(cardStyles).not.toBeNull();
    expect(cardStyles?.softOverflow).toBe("hidden");
    expect(cardStyles?.holoOverflow).toBe("hidden");
    expect(cardStyles?.softBeforeInset).toBe("0px");
    expect(cardStyles?.softAfterInset).toBe("0px");
    expect(cardStyles?.holoBeforeInset).toBe("0px");
    expect(cardStyles?.holoAfterInset).toBe("0px");
    expect(cardStyles?.softBeforeZ).toBe("0");
    expect(cardStyles?.softAfterZ).toBe("0");
    expect(cardStyles?.holoBeforeZ).toBe("0");
    expect(cardStyles?.holoAfterZ).toBe("0");
    const softBeforeAnimation = cardStyles?.softBeforeAnimation ?? "";
    const softAfterAnimation = cardStyles?.softAfterAnimation ?? "";
    const holoBeforeAnimation = cardStyles?.holoBeforeAnimation ?? "";
    const holoAfterAnimation = cardStyles?.holoAfterAnimation ?? "";
    expect(
      softBeforeAnimation === "none" ||
        softBeforeAnimation.includes("rainbowFlowShift") ||
        softBeforeAnimation.includes("holoSpectrumFlow"),
    ).toBeTruthy();
    expect(
      softAfterAnimation === "none" ||
        softAfterAnimation.includes("cardShadowDrift") ||
        softAfterAnimation.includes("holoSpectrumFlow"),
    ).toBeTruthy();
    expect(
      holoBeforeAnimation === "none" ||
        holoBeforeAnimation.includes("rainbowFlowShift") ||
        holoBeforeAnimation.includes("holoCardFlow") ||
        holoBeforeAnimation.includes("holoSpectrumFlow"),
    ).toBeTruthy();
    expect(
      holoAfterAnimation === "none" ||
        holoAfterAnimation.includes("rainbowFlowShift") ||
        holoAfterAnimation.includes("holoCardFlow") ||
        holoAfterAnimation.includes("holoSpectrumFlow"),
    ).toBeTruthy();
    expect(Number(cardStyles?.softBeforeOpacity ?? 1)).toBeLessThanOrEqual(0.2);
    expect(Number(cardStyles?.softAfterOpacity ?? 1)).toBeLessThanOrEqual(0.2);
    expect(Number(cardStyles?.holoBeforeOpacity ?? 1)).toBeLessThanOrEqual(0.2);
    expect(Number(cardStyles?.holoAfterOpacity ?? 1)).toBeLessThanOrEqual(0.2);
    expect(cardStyles?.cssText).toContain(".card-soft::after");
    expect(cardStyles?.cssText).toContain(".card-holo::after");
    expect(cardStyles?.cssText).toContain("@keyframes rainbowFlowShift");
    expect(cardStyles?.cssText).toContain("@keyframes cardShadowDrift");
    expect(cardStyles?.cssText).toMatch(/\.card-soft::after[\s\S]*opacity:\s*0\.15/);
    expect(cardStyles?.cssText).toMatch(/\.card-soft::before[\s\S]*opacity:\s*0\.165/);
    expect(cardStyles?.cssText).toMatch(/\.card-holo::before[\s\S]*opacity:\s*0\.165/);
    expect(cardStyles?.cssText).toMatch(/\.card-holo::after[\s\S]*opacity:\s*0\.15/);
    expect(cardStyles?.cssText).toMatch(/\.card[\s\S]*overflow:\s*hidden/);
    expect(cardStyles?.cssText).toMatch(/\.card-soft::after[\s\S]*inset:\s*0/);
    expect(cardStyles?.cssText).toMatch(/\.card-soft::before[\s\S]*inset:\s*0/);
    expect(cardStyles?.cssText).toMatch(/\.card-holo::before[\s\S]*inset:\s*0/);
    expect(cardStyles?.cssText).toMatch(/\.card-holo::after[\s\S]*inset:\s*0/);
    expect(cardStyles?.cssText).toContain(".stagger-container .stagger-item:not(.card)::after");
    expect(cardStyles?.cssText).toContain(".stagger-container .stagger-item:not(.card).revealed::after");
    expect(cardStyles?.cssText).toContain(".stagger-container .stagger-item.card::after");
  });
});
