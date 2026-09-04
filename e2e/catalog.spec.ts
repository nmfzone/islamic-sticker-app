import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("sticker catalog", () => {
  test("supports search, category intersection, reset, and keyboard overlay parity", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: /Share faith/i })).toBeVisible();
    await expect(page.getByLabel("Sticker packs").getByRole("article")).toHaveCount(6);

    const search = page.getByRole("searchbox", { name: "Search sticker packs" });
    await search.fill("crescent");
    await expect(page.getByRole("link", { name: /Ramadan Nights & Eid/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "View Little Muslims sticker pack" })).toHaveCount(
      0,
    );

    await page.getByRole("button", { name: "Daily Duas" }).click();
    await expect(page.getByRole("heading", { name: "No matching packs yet" })).toBeVisible();

    await page.getByRole("button", { name: "Show all packs" }).click();
    await expect(page.getByLabel("Sticker packs").getByRole("article")).toHaveCount(6);

    const firstPack = page.getByRole("link", { name: /View Salam, Always/i });
    await firstPack.focus();
    await expect(firstPack.getByText("Preview pack")).toBeVisible();
  });

  test("has no automatically detectable accessibility violations on landing", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
