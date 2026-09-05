"use client";

import type { CategoryInfo } from "@/lib/catalog/types";
import { cn } from "@/lib/utils";

interface CategoryStripProps {
  readonly categories: readonly CategoryInfo[];
  readonly selectedCategory: string;
  readonly onSelect: (categoryId: string) => void;
}

export function CategoryStrip({ categories, selectedCategory, onSelect }: CategoryStripProps) {
  return (
    <nav
      className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
      aria-label="Sticker pack categories"
    >
      <fieldset className="flex min-w-max items-center gap-1.5 border-none p-0 m-0">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              aria-pressed={isSelected}
              className={cn(
                "h-9 rounded-full px-4 text-sm font-semibold text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isSelected ? "bg-secondary" : "bg-transparent hover:bg-secondary/70",
              )}
            >
              {category.name}
            </button>
          );
        })}
      </fieldset>
    </nav>
  );
}
