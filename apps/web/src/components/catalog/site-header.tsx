import { Sparkles } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border/70 bg-background">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-[72px]">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Islamic WA Sticker home"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground transition-transform duration-150 group-hover:-rotate-3 group-focus-visible:-rotate-3 motion-reduce:transition-none">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <span className="text-[15px] font-bold tracking-[-0.02em] sm:text-base">
            Islamic WA Sticker
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link
            href="/#catalog"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Browse packs
          </Link>
        </nav>
      </div>
    </header>
  );
}
