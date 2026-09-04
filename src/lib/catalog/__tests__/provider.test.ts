import { describe, expect, it } from "vitest";
import { LocalStickerCatalogProvider } from "../provider";

describe("LocalStickerCatalogProvider", () => {
  it("returns the mixed six-category showcase", async () => {
    // Given
    const provider = new LocalStickerCatalogProvider();

    // When
    const packs = await provider.getAllPacks();

    // Then
    expect(packs.map((pack) => pack.category)).toEqual([
      "Greetings",
      "Daily Duas",
      "Jumuah",
      "Ramadan & Eid",
      "Little Muslims",
      "Gentle Reminders",
    ]);
  });

  it("returns a pack for a known slug", async () => {
    // Given
    const provider = new LocalStickerCatalogProvider();

    // When
    const pack = await provider.getPackBySlug("jumuah-light");

    // Then
    expect(pack?.title).toBe("Jumuah Light");
  });

  it("returns null for an unknown slug", async () => {
    // Given
    const provider = new LocalStickerCatalogProvider();

    // When
    const pack = await provider.getPackBySlug("not-a-real-pack");

    // Then
    expect(pack).toBeNull();
  });

  it("searches title, category, and sticker keywords with intersection filtering", async () => {
    // Given
    const provider = new LocalStickerCatalogProvider();

    // When
    const matches = await provider.searchPacks({
      query: "crescent",
      category: "ramadan-eid",
    });

    // Then
    expect(matches.map((pack) => pack.slug)).toEqual(["ramadan-eid"]);
  });
});
