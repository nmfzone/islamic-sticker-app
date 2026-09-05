import Image from "next/image";
import { cn } from "@/lib/utils";

interface StickerMediaProps {
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
  readonly priority?: boolean;
  readonly sizes?: string;
}

export function StickerMedia({
  src,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 1280px) 297px, (min-width: 768px) 33vw, 50vw",
}: StickerMediaProps) {
  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary", className)}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
