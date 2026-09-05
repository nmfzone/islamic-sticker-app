import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LocalStickerCatalogProvider } from "@/lib/catalog/provider";
import { CatalogBrowser } from "../catalog-browser";

async function renderCatalog() {
  const provider = new LocalStickerCatalogProvider();
  const [packs, categories] = await Promise.all([provider.getAllPacks(), provider.getCategories()]);
  render(<CatalogBrowser packs={packs} categories={categories} />);
}

describe("CatalogBrowser", () => {
  it("filters packs by a sticker-only keyword", async () => {
    // Given
    const user = userEvent.setup();
    await renderCatalog();

    // When
    await user.type(screen.getByRole("searchbox"), "crescent");

    // Then
    expect(screen.getByRole("link", { name: /Ramadan Nights & Eid/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Little Muslims/i })).not.toBeInTheDocument();
  });

  it("intersects search text with category selection", async () => {
    // Given
    const user = userEvent.setup();
    await renderCatalog();

    // When
    await user.click(screen.getByRole("button", { name: "Daily Duas" }));
    await user.type(screen.getByRole("searchbox"), "crescent");

    // Then
    expect(screen.getByRole("status")).toHaveTextContent("0 packs");
    expect(screen.getByRole("heading", { name: "No matching packs yet" })).toBeInTheDocument();
  });

  it("resets empty discovery state to show all packs", async () => {
    // Given
    const user = userEvent.setup();
    await renderCatalog();
    await user.type(screen.getByRole("searchbox"), "definitely-absent");

    // When
    await user.click(screen.getByRole("button", { name: "Show all packs" }));

    // Then
    expect(screen.getByRole("status")).toHaveTextContent("6 packs");
    expect(screen.getAllByRole("link", { name: /View .* sticker pack/i })).toHaveLength(6);
  });
});
