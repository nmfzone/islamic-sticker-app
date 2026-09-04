import { ArrowLeft, SearchX } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/catalog/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto flex max-w-[1440px] flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-12 lg:py-32 xl:px-[72px]">
        <span className="mb-6 grid size-16 place-items-center rounded-2xl bg-secondary text-muted-foreground">
          <SearchX className="size-7" aria-hidden="true" />
        </span>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
          Pack not found
        </p>
        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          This sticker pack isn’t here.
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
          It may have moved, or the link may be incomplete. Browse the catalog to find an available
          pack.
        </p>
        <Button asChild className="mt-8">
          <Link href="/#catalog">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Browse all packs
          </Link>
        </Button>
      </section>
    </main>
  );
}
