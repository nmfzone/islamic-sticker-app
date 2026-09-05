import { describe, expect, it } from "vitest";
import { filterPacks, matchesPack, normalizeText } from "../search";
import type { StickerPack } from "../types";

const mockPacks: [StickerPack, StickerPack, StickerPack] = [
  {
    slug: "greetings-salam-vol-1",
    title: "Salam & Daily Greetings",
    description: "Warm Islamic greetings for family and friends.",
    category: "Greetings",
    categorySlug: "greetings",
    stickerCount: 8,
    coverUrl: "/stickers/greetings/cover.svg",
    coverAltText: "Salam & Daily Greetings Pack Cover",
    keywords: ["salam", "assalamualaikum", "greetings", "hello"],
    stickers: [
      {
        id: "s1",
        title: "Assalamu Alaikum",
        imageUrl: "/stickers/greetings/s1.svg",
        altText: "Assalamu Alaikum Calligraphy",
        keywords: ["salam", "peace", "greeting"],
      },
      {
        id: "s2",
        title: "Subhah al-Khair",
        imageUrl: "/stickers/greetings/s2.svg",
        altText: "Good morning in Arabic",
        keywords: ["morning", "khair"],
      },
    ],
  },
  {
    slug: "daily-duas-essential",
    title: "Essential Daily Duas",
    description: "Beautiful supplications for every part of your day.",
    category: "Daily Duas",
    categorySlug: "daily-duas",
    stickerCount: 6,
    coverUrl: "/stickers/daily-duas/cover.svg",
    coverAltText: "Essential Daily Duas Pack Cover",
    keywords: ["dua", "supplication", "bismillah", "alhamdulillah"],
    stickers: [
      {
        id: "d1",
        title: "Bismillah ir-Rahman ir-Rahim",
        imageUrl: "/stickers/daily-duas/d1.svg",
        altText: "Bismillah Calligraphy",
        keywords: ["bismillah", "start", "blessing"],
      },
    ],
  },
  {
    slug: "ramadan-eid-blessings",
    title: "Ramadan & Eid Mubarak",
    description: "Festive calligraphy and greetings for holy months.",
    category: "Ramadan & Eid",
    categorySlug: "ramadan-eid",
    stickerCount: 12,
    coverUrl: "/stickers/ramadan-eid/cover.svg",
    coverAltText: "Ramadan & Eid Pack Cover",
    keywords: ["ramadan", "eid", "mubarak", "fasting", "iftar"],
    stickers: [
      {
        id: "r1",
        title: "Ramadan Kareem",
        imageUrl: "/stickers/ramadan-eid/r1.svg",
        altText: "Ramadan Kareem Crescent",
        keywords: ["crescent", "moon", "kareem"],
      },
    ],
  },
];

describe("normalizeText", () => {
  it("trims, lowercases, and collapses internal spaces", () => {
    expect(normalizeText("  ASSALAMU    ALAIKUM  ")).toBe("assalamu alaikum");
  });
});

describe("matchesPack", () => {
  it("matches pack title", () => {
    expect(matchesPack(mockPacks[0], { query: "salam" })).toBe(true);
  });

  it("matches pack keywords", () => {
    expect(matchesPack(mockPacks[1], { query: "bismillah" })).toBe(true);
  });

  it("matches sticker keyword even when not in pack title", () => {
    expect(matchesPack(mockPacks[2], { query: "crescent" })).toBe(true);
  });

  it("filters by category slug", () => {
    expect(matchesPack(mockPacks[0], { category: "greetings" })).toBe(true);
    expect(matchesPack(mockPacks[0], { category: "daily-duas" })).toBe(false);
  });

  it("intersects category and search query", () => {
    expect(matchesPack(mockPacks[0], { query: "salam", category: "greetings" })).toBe(true);
    expect(matchesPack(mockPacks[0], { query: "bismillah", category: "greetings" })).toBe(false);
  });
});

describe("filterPacks", () => {
  it("returns all packs when query and category are empty or all", () => {
    expect(filterPacks(mockPacks, {})).toHaveLength(3);
    expect(filterPacks(mockPacks, { category: "all" })).toHaveLength(3);
  });

  it("returns empty array when search matches nothing", () => {
    expect(filterPacks(mockPacks, { query: "xyz123unmatched" })).toEqual([]);
  });
});
