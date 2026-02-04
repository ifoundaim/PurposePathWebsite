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
});
