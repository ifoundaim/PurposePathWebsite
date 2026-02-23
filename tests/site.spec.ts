import { test, expect } from "@playwright/test";

test.describe("PurposePath site", () => {
  test("primary navigation routes to key pages", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Illustration Marketplace" }))
      .toBeVisible();

    await page.getByRole("link", { name: "Marketing Services" }).click();
    await expect(page.getByRole("heading", { name: "Marketing Services" }))
      .toBeVisible();

    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();

    await page.getByRole("link", { name: "Illustration Marketplace" }).click();
    await expect(page.getByRole("heading", { name: "In Dev" })).toBeVisible();
  });

  test("forms are wired and required fields exist", async ({ page }) => {
    await page.goto("/contact-us");
    await expect(page.getByRole("textbox", { name: "Name" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Message" })).toBeVisible();

    const contactFormAction = await page.locator("form").first().getAttribute("action");
    expect(contactFormAction).toContain("formspree.io");

    await page.goto("/");
    const subscribeFormAction = await page.locator("footer form").getAttribute("action");
    expect(subscribeFormAction).toContain("formspree.io");
  });

  test("hero video sound controls and media-priority behavior work", async ({ page }) => {
    await page.goto("/");

    const heroVideo = page.getByLabel("PurposePath story reel");
    const audioToggle = page.locator(".hero-audio-toggle");

    await expect(heroVideo).toBeVisible();
    await expect(audioToggle).toBeVisible();
    await expect
      .poll(async () => heroVideo.evaluate((video) => Number(video.volume.toFixed(2))))
      .toBe(0.4);
    await expect
      .poll(async () => heroVideo.evaluate((video) => video.muted))
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
});
