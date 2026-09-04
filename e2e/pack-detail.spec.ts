import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("pack detail", () => {
  test("renders every sticker preview and restores install focus after dismissal", async ({
    page,
  }) => {
    await page.goto("/packs/jumuah-light");

    await expect(page.getByRole("heading", { name: "Jumuah Light", level: 1 })).toBeVisible();
    await expect(page.locator("figure")).toHaveCount(6);

    const install = page.getByRole("button", {
      name: "Install Jumuah Light sticker pack",
    });
    await install.click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Coming soon" })).toBeVisible();
    await expect(page.getByText(/WhatsApp and Telegram installation/i)).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await expect(install).toBeFocused();
  });

  test("returns the application not-found experience for unknown slugs", async ({ page }) => {
    const response = await page.goto("/packs/unknown-pack");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: /isn’t here/i })).toBeVisible();
  });

  test("has no automatically detectable accessibility violations", async ({ page }) => {
    await page.goto("/packs/little-muslims");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
