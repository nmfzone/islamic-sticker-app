import { filterPacks } from "./search";
import type {
  CategoryInfo,
  SearchParams,
  StickerCatalogProvider,
  StickerItem,
  StickerPack,
} from "./types";

const categories = [
  { id: "all", name: "All packs" },
  { id: "greetings", name: "Greetings" },
  { id: "daily-duas", name: "Daily Duas" },
  { id: "jumuah", name: "Jumuah" },
  { id: "ramadan-eid", name: "Ramadan & Eid" },
  { id: "little-muslims", name: "Little Muslims" },
  { id: "reminders", name: "Gentle Reminders" },
] satisfies readonly CategoryInfo[];

function sticker(
  packSlug: string,
  id: string,
  title: string,
  keywords: readonly string[],
): StickerItem {
  return {
    id,
    title,
    imageUrl: `/stickers/${packSlug}/cover.svg`,
    altText: `${title} sticker from the ${packSlug.replaceAll("-", " ")} pack`,
    keywords,
  };
}

const packs = [
  {
    slug: "salam-greetings",
    title: "Salam, Always",
    description: "Warm greetings for everyday conversations with family and friends.",
    category: "Greetings",
    categorySlug: "greetings",
    stickerCount: 6,
    coverUrl: "/stickers/salam-greetings/cover.svg",
    coverAltText: "Salam, Always pack with flowing calligraphy and a leafy arch",
    keywords: ["hello", "peace", "welcome", "family"],
    stickers: [
      sticker("salam-greetings", "assalamu-alaikum", "Assalamu Alaikum", ["salam", "peace"]),
      sticker("salam-greetings", "wa-alaikum-salam", "Wa Alaikum Salam", ["reply", "greeting"]),
      sticker("salam-greetings", "good-morning", "A Blessed Morning", ["morning", "khair"]),
      sticker("salam-greetings", "welcome", "Ahlan wa Sahlan", ["welcome", "guest"]),
      sticker("salam-greetings", "miss-you", "You Are Remembered", ["friend", "care"]),
      sticker("salam-greetings", "peace", "Peace Be With You", ["peace", "salam"]),
    ],
  },
  {
    slug: "daily-duas",
    title: "Little Daily Duas",
    description: "Gentle reminders to begin, pause, and finish the day with remembrance.",
    category: "Daily Duas",
    categorySlug: "daily-duas",
    stickerCount: 6,
    coverUrl: "/stickers/daily-duas/cover.svg",
    coverAltText: "Little Daily Duas pack with prayer beads and a sunrise",
    keywords: ["supplication", "dhikr", "prayer", "blessing"],
    stickers: [
      sticker("daily-duas", "bismillah", "Bismillah", ["begin", "blessing"]),
      sticker("daily-duas", "alhamdulillah", "Alhamdulillah", ["gratitude", "thanks"]),
      sticker("daily-duas", "subhanallah", "SubhanAllah", ["wonder", "praise"]),
      sticker("daily-duas", "before-sleep", "Sleep in Peace", ["night", "sleep"]),
      sticker("daily-duas", "safe-travels", "Travel Safely", ["journey", "travel"]),
      sticker("daily-duas", "ameen", "Ameen", ["dua", "prayer"]),
    ],
  },
  {
    slug: "jumuah-light",
    title: "Jumuah Light",
    description: "Thoughtful Friday greetings for a day of prayer, reflection, and community.",
    category: "Jumuah",
    categorySlug: "jumuah",
    stickerCount: 6,
    coverUrl: "/stickers/jumuah-light/cover.svg",
    coverAltText: "Jumuah Light pack with a mosque silhouette and sun rays",
    keywords: ["friday", "mosque", "salah", "surah kahf"],
    stickers: [
      sticker("jumuah-light", "mubarak", "Jumuah Mubarak", ["friday", "blessed"]),
      sticker("jumuah-light", "kahf", "Remember Surah Al-Kahf", ["quran", "kahf"]),
      sticker("jumuah-light", "salawat", "Send Salawat", ["prophet", "dhikr"]),
      sticker("jumuah-light", "prayer", "See You at Prayer", ["mosque", "salah"]),
      sticker("jumuah-light", "dua-hour", "The Hour of Dua", ["asr", "supplication"]),
      sticker("jumuah-light", "peaceful-friday", "A Peaceful Friday", ["peace", "community"]),
    ],
  },
  {
    slug: "ramadan-eid",
    title: "Ramadan Nights & Eid",
    description: "Moonlit wishes for fasting days, shared iftars, and joyful Eid mornings.",
    category: "Ramadan & Eid",
    categorySlug: "ramadan-eid",
    stickerCount: 6,
    coverUrl: "/stickers/ramadan-eid/cover.svg",
    coverAltText: "Ramadan Nights and Eid pack with a crescent and lanterns",
    keywords: ["fasting", "iftar", "suhoor", "moon", "celebration"],
    stickers: [
      sticker("ramadan-eid", "kareem", "Ramadan Kareem", ["ramadan", "crescent"]),
      sticker("ramadan-eid", "iftar", "Iftar Mubarak", ["food", "sunset"]),
      sticker("ramadan-eid", "suhoor", "Wake Up for Suhoor", ["morning", "fast"]),
      sticker("ramadan-eid", "eid-mubarak", "Eid Mubarak", ["eid", "celebrate"]),
      sticker("ramadan-eid", "taqabbal", "May It Be Accepted", ["accepted", "deeds"]),
      sticker("ramadan-eid", "moon", "The Moon Is Here", ["crescent", "sighting"]),
    ],
  },
  {
    slug: "little-muslims",
    title: "Little Muslims",
    description: "Cheerful encouragement for young hearts learning beautiful everyday habits.",
    category: "Little Muslims",
    categorySlug: "little-muslims",
    stickerCount: 6,
    coverUrl: "/stickers/little-muslims/cover.svg",
    coverAltText: "Little Muslims pack with a smiling star and colorful blocks",
    keywords: ["children", "kids", "learning", "kindness", "family"],
    stickers: [
      sticker("little-muslims", "mashaallah", "MashaAllah, Superstar", ["praise", "child"]),
      sticker("little-muslims", "kind", "Choose Kindness", ["kindness", "share"]),
      sticker("little-muslims", "prayer-time", "Prayer Time", ["salah", "routine"]),
      sticker("little-muslims", "brave", "Brave Little Believer", ["courage", "faith"]),
      sticker("little-muslims", "good-deed", "Good Deed Done", ["reward", "help"]),
      sticker("little-muslims", "proud", "So Proud of You", ["encourage", "learn"]),
    ],
  },
  {
    slug: "gentle-reminders",
    title: "Gentle Reminders",
    description: "Quiet words of hope and patience to share when someone needs them most.",
    category: "Gentle Reminders",
    categorySlug: "reminders",
    stickerCount: 6,
    coverUrl: "/stickers/gentle-reminders/cover.svg",
    coverAltText: "Gentle Reminders pack with clouds and a calm winding path",
    keywords: ["patience", "hope", "trust", "healing", "sabr"],
    stickers: [
      sticker("gentle-reminders", "allah-with-you", "Allah Is With You", ["hope", "comfort"]),
      sticker("gentle-reminders", "sabr", "Beautiful Sabr", ["patience", "steadfast"]),
      sticker("gentle-reminders", "tawakkul", "Trust the Plan", ["tawakkul", "trust"]),
      sticker("gentle-reminders", "ease", "With Hardship Comes Ease", ["ease", "quran"]),
      sticker("gentle-reminders", "dua", "Keep Making Dua", ["prayer", "hope"]),
      sticker("gentle-reminders", "heart", "Rest Your Heart", ["calm", "healing"]),
    ],
  },
] satisfies readonly StickerPack[];

export class LocalStickerCatalogProvider implements StickerCatalogProvider {
  async getAllPacks(): Promise<readonly StickerPack[]> {
    return packs;
  }

  async getPackBySlug(slug: string): Promise<StickerPack | null> {
    return packs.find((pack) => pack.slug === slug) ?? null;
  }

  async searchPacks(params: SearchParams): Promise<readonly StickerPack[]> {
    return filterPacks(packs, params);
  }

  async getCategories(): Promise<readonly CategoryInfo[]> {
    return categories;
  }
}

export const catalogProvider: StickerCatalogProvider = new LocalStickerCatalogProvider();
