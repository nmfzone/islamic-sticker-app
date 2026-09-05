"use client";

import { useMemo, useState } from "react";
import { filterPacks } from "@/lib/catalog/search";
import type { CategoryInfo, StickerPack } from "@/lib/catalog/types";
import { CategoryStrip } from "./category-strip";
import { EmptyState } from "./empty-state";
import { PackSurface } from "./pack-surface";
import { SearchControl } from "./search-control";

interface CatalogBrowserProps {
  readonly packs: readonly StickerPack[];
  readonly categories: readonly CategoryInfo[];
}

export function CatalogBrowser({ packs, categories }: CatalogBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const visiblePacks = useMemo(
    () => filterPacks(packs, { query, category }),
    [packs, query, category],
  );

  const reset = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <section id="catalog" aria-labelledby="catalog-heading">
      <div className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-12 lg:pb-28 xl:px-[72px]">
        <div className="mb-7 flex flex-col gap-5 md:mb-9 md:gap-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                Curated catalog
              </p>
              <h2
                id="catalog-heading"
                className="text-2xl font-bold tracking-[-0.03em] sm:text-[32px] sm:leading-[38px]"
              >
                Find a sticker for the moment
              </h2>
            </div>
            <p
              className="text-sm text-muted-foreground"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {visiblePacks.length} {visiblePacks.length === 1 ? "pack" : "packs"}
            </p>
          </div>
          <SearchControl value={query} onChange={setQuery} />
          <CategoryStrip
            categories={categories}
            selectedCategory={category}
            onSelect={setCategory}
          />
        </div>

        {visiblePacks.length > 0 ? (
          <section
            className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-9 xl:gap-y-10"
            aria-label="Sticker packs"
          >
            {visiblePacks.map((pack, index) => (
              <PackSurface key={pack.slug} pack={pack} priority={index < 4} />
            ))}
          </section>
        ) : (
          <EmptyState onReset={reset} />
        )}
      </div>
    </section>
  );
}
