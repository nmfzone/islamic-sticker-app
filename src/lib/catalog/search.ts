import type { SearchParams, StickerPack } from "./types";

/**
 * Normalizes text for matching by trimming whitespace, converting to lowercase,
 * and collapsing multiple internal spaces.
 */
export function normalizeText(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

/**
 * Checks if a query string matches a target text string using normalized inclusion.
 */
export function matchesTerm(target: string, queryNormalized: string): boolean {
  if (!queryNormalized) return true;
  return normalizeText(target).includes(queryNormalized);
}

/**
 * Checks if any keyword in an array matches the normalized query string.
 */
export function matchesKeywords(keywords: readonly string[], queryNormalized: string): boolean {
  if (!queryNormalized) return true;
  return keywords.some((kw) => matchesTerm(kw, queryNormalized));
}

/**
 * Determines whether a single sticker pack matches search parameters.
 * Matches against pack title, category, pack keywords, and individual sticker titles & keywords.
 */
export function matchesPack(pack: StickerPack, params: SearchParams): boolean {
  const { query = "", category = "" } = params;

  // Category filter matching
  if (category && category !== "all") {
    const categoryNorm = normalizeText(category);
    const packCatNorm = normalizeText(pack.category);
    const packCatSlugNorm = normalizeText(pack.categorySlug);

    const matchesCategory =
      packCatNorm === categoryNorm ||
      packCatSlugNorm === categoryNorm ||
      packCatNorm.replace(/[\s&]+/g, "-") === categoryNorm;

    if (!matchesCategory) {
      return false;
    }
  }

  // Search query matching
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    return true;
  }

  // 1. Pack title
  if (matchesTerm(pack.title, normalizedQuery)) {
    return true;
  }

  // 2. Pack category
  if (matchesTerm(pack.category, normalizedQuery)) {
    return true;
  }

  // 3. Pack level keywords
  if (matchesKeywords(pack.keywords, normalizedQuery)) {
    return true;
  }

  // 4. Individual sticker titles and keywords
  const matchesSticker = pack.stickers.some(
    (sticker) =>
      matchesTerm(sticker.title, normalizedQuery) ||
      matchesKeywords(sticker.keywords, normalizedQuery),
  );

  return matchesSticker;
}

/**
 * Filter an array of packs based on search parameters (intersection of query and category).
 */
export function filterPacks(
  packs: readonly StickerPack[],
  params: SearchParams,
): readonly StickerPack[] {
  return packs.filter((pack) => matchesPack(pack, params));
}
