import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { StickerPack } from "@/lib/catalog/types";
import { StickerMedia } from "./sticker-media";

interface PackSurfaceProps {
  readonly pack: StickerPack;
  readonly priority?: boolean;
}

export function PackSurface({ pack, priority = false }: PackSurfaceProps) {
  return (
    <article className="group surface-flat min-w-0">
      <Link
        href={`/packs/${pack.slug}`}
        className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        aria-label={`View ${pack.title} sticker pack`}
      >
        <div className="relative overflow-hidden rounded-lg">
          <StickerMedia
            src={pack.coverUrl}
            alt={pack.coverAltText}
            priority={priority}
            className="transition-[filter] duration-200 group-hover:brightness-[0.88] group-focus-within:brightness-[0.88] motion-reduce:transition-none"
          />
          <div
            className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground">
              Preview pack
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
        <div className="flex min-h-12 items-center justify-between gap-3 pt-3">
          <h2 className="min-w-0 truncate text-sm font-semibold tracking-[-0.01em] text-foreground">
            {pack.title}
          </h2>
          <span className="shrink-0 text-xs text-muted-foreground">
            {pack.stickerCount} stickers
          </span>
        </div>
      </Link>
    </article>
  );
}
