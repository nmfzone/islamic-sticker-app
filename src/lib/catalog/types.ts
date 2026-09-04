export type CategorySlug =
  | "all"
  | "greetings"
  | "daily-duas"
  | "jumuah"
  | "ramadan-eid"
  | "little-muslims"
  | "reminders";

export interface CategoryInfo {
  readonly id: CategorySlug;
  readonly name: string;
}

export interface StickerItem {
  readonly id: string;
  readonly title: string;
  readonly imageUrl: string;
  readonly altText: string;
  readonly keywords: readonly string[];
}

export interface StickerPack {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly categorySlug: CategorySlug;
  readonly stickerCount: number;
  readonly coverUrl: string;
  readonly coverAltText: string;
  readonly stickers: readonly StickerItem[];
  readonly keywords: readonly string[];
}

export interface SearchParams {
  readonly query?: string;
  readonly category?: string;
}

export interface StickerCatalogProvider {
  getAllPacks(): Promise<readonly StickerPack[]>;
  getPackBySlug(slug: string): Promise<StickerPack | null>;
  searchPacks(params: SearchParams): Promise<readonly StickerPack[]>;
  getCategories(): Promise<readonly CategoryInfo[]>;
}
