import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InstallDialog } from "@/components/catalog/install-dialog";
import { SiteHeader } from "@/components/catalog/site-header";
import { StickerMedia } from "@/components/catalog/sticker-media";
import { StickerPreview } from "@/components/catalog/sticker-preview";
import { Badge } from "@/components/ui/badge";
import { catalogProvider } from "@/lib/catalog/provider";

interface PackPageProps {
  readonly params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const packs = await catalogProvider.getAllPacks();
  return packs.map((pack) => ({ slug: pack.slug }));
}

export async function generateMetadata({ params }: PackPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pack = await catalogProvider.getPackBySlug(slug);

  if (!pack) {
    return { title: "Pack not found" };
  }

  return {
    title: pack.title,
    description: pack.description,
  };
}

export default async function PackPage({ params }: PackPageProps) {
  const { slug } = await params;
  const pack = await catalogProvider.getPackBySlug(slug);

  if (!pack) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <article className="mx-auto max-w-[1440px] px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-12 lg:pb-28 xl:px-[72px]">
        <Link
          href="/#catalog"
          className="mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:mb-10"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to all packs
        </Link>

        <header className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center lg:gap-16">
          <StickerMedia
            src={pack.coverUrl}
            alt={pack.coverAltText}
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
          <div>
            <Badge className="mb-5">{pack.category}</Badge>
            <div className="flex items-start justify-between gap-5">
              <div>
                <h1 className="text-[clamp(2.4rem,5vw,4.75rem)] font-bold leading-[0.95] tracking-[-0.055em]">
                  {pack.title}
                </h1>
                <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {pack.description}
                </p>
              </div>
              <InstallDialog packTitle={pack.title} />
            </div>
            <p className="mt-7 text-sm font-semibold text-foreground">
              {pack.stickerCount} stickers in this pack
            </p>
          </div>
        </header>

        <section className="mt-16 sm:mt-20" aria-labelledby="stickers-heading">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                Complete preview
              </p>
              <h2
                id="stickers-heading"
                className="text-2xl font-bold tracking-[-0.03em] sm:text-[32px] sm:leading-[38px]"
              >
                Inside the pack
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-9 xl:gap-y-10">
            {pack.stickers.map((sticker) => (
              <StickerPreview key={sticker.id} sticker={sticker} />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
