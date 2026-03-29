const BOT = "https://t.me/OfferMatch_resume_helper_bot";

export function getBotLink(section: string): string {
  if (typeof window === "undefined") return `${BOT}?start=${section}`;

  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source") || "";
  const campaign = params.get("utm_campaign") || "";

  const parts = [section, source, campaign].filter(Boolean);
  return `${BOT}?start=${parts.join("_")}`;
}