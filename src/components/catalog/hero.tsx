import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-8 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-end lg:px-12 lg:pb-24 lg:pt-20 xl:px-[72px]">
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
          Words with warmth
        </p>
        <h1 className="max-w-3xl text-[clamp(2.75rem,7vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.065em]">
          Share faith,
          <br />
          <span className="text-primary">one sticker</span> at a time.
        </h1>
      </div>
      <div className="flex flex-col gap-6 lg:pb-2">
        <p className="max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          A thoughtfully curated collection of Islamic expressions for everyday chats — from warm
          salaams to quiet reminders.
        </p>
        <a
          href="#catalog"
          className="inline-flex w-fit items-center gap-2 rounded-lg text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        >
          Explore the collection
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
