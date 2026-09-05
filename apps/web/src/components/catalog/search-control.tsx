"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchControlProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function SearchControl({ value, onChange }: SearchControlProps) {
  return (
    <div className="relative w-full">
      <Search
        className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <Input
        type="search"
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        placeholder="Search packs, categories, or sticker words…"
        aria-label="Search sticker packs"
        className="h-[54px] rounded-xl border-transparent bg-secondary pl-13 pr-13 text-base shadow-none placeholder:text-muted-foreground/80 focus-visible:bg-background"
      />
      {value ? (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 size-10 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X className="size-4" aria-hidden="true" />
        </Button>
      ) : null}
    </div>
  );
}
