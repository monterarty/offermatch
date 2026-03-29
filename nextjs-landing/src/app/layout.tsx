import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OfferMatch — Умная адаптация резюме",
  description: "Отправь резюме и вакансию боту — ИИ оценит соответствие, усилит резюме и напишет сопроводительное за 30 секунд.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "OfferMatch — Умная адаптация резюме",
    description: "Отправь резюме и вакансию боту — ИИ оценит соответствие, усилит резюме и напишет сопроводительное за 30 секунд.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary",
    title: "OfferMatch — Умная адаптация резюме",
    description: "Отправь резюме и вакансию боту — ИИ оценит соответствие, усилит резюме и напишет сопроводительное за 30 секунд.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
