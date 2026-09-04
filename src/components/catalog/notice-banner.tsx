import { Sparkles } from "lucide-react";

export function NoticeBanner() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-12 xl:px-[72px]">
      <div className="flex items-start gap-3 rounded-2xl bg-secondary px-4 py-4 sm:items-center sm:px-5">
        <Sparkles className="mt-0.5 size-4 shrink-0 text-primary sm:mt-0" aria-hidden="true" />
        <p className="text-sm leading-6 text-muted-foreground">
          Preview the collection today. Mobile app installation for WhatsApp and Telegram is coming
          in a future release.
        </p>
      </div>
    </div>
  );
}
