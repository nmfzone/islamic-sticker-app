import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Islamic WA Sticker — Catalog",
    template: "%s · Islamic WA Sticker",
  },
  description:
    "Discover curated Islamic sticker packs for WhatsApp and Telegram. Browse a visual catalog of greetings, daily duas, Jumuah, Ramadan and Eid, Little Muslims, and gentle reminders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
