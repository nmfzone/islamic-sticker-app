import Image from "next/image";
import type { StickerItem } from "@/lib/catalog/types";

interface StickerPreviewProps {
  readonly sticker: StickerItem;
}

export function StickerPreview({ sticker }: StickerPreviewProps) {
  return (
    <figure className="group min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
        <Image
          src={sticker.imageUrl}
          alt={sticker.altText}
          fill
          sizes="(min-width: 1280px) 297px, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none"
        />
      </div>
      <figcaption className="min-h-12 pt-3 text-sm font-medium text-foreground">
        {sticker.title}
      </figcaption>
    </figure>
  );
}
