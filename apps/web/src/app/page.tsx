import { CatalogBrowser } from "@/components/catalog/catalog-browser";
import { Hero } from "@/components/catalog/hero";
import { NoticeBanner } from "@/components/catalog/notice-banner";
import { SiteHeader } from "@/components/catalog/site-header";
import { catalogProvider } from "@/lib/catalog/provider";

export default async function HomePage() {
  const [packs, categories] = await Promise.all([
    catalogProvider.getAllPacks(),
    catalogProvider.getCategories(),
  ]);

  return (
    <main>
      <SiteHeader />
      <Hero />
      <NoticeBanner />
      <CatalogBrowser packs={packs} categories={categories} />
    </main>
  );
}
