export type Locale = "fr" | "en";
export type Region = "Monde" | "Afrique" | "Europe" | "France" | "USA";
export type Category = "News" | "Tech" | "Business" | "Crypto" | "Sport" | "Culture" | "Société";
export type VoteChoice = "yes" | "no" | "neutral";

export type Signal = {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  category: Category;
  region: Region;
  horizon: string;
  status: "open" | "resolved";
  yes: number;
  no: number;
  neutral: number;
  tension: number;
  votes: number;
  trend: "Trending" | "Nouveau" | "Résolus" | "Tension élevée";
  nuance: string[];
};

const categories: Category[] = ["News", "Tech", "Business", "Crypto", "Sport", "Culture", "Société"];
const regions: Region[] = ["Monde", "Afrique", "Europe", "France", "USA"];
const topics = [
  ["L’IA générative sera-t-elle intégrée dans la majorité des outils bureautiques grand public", "Will generative AI be embedded in most mainstream office tools"],
  ["Les grandes villes européennes réduiront-elles davantage la place de la voiture individuelle", "Will major European cities further reduce private car usage"],
  ["Une nouvelle norme de transparence s’imposera-t-elle aux plateformes sociales", "Will a new transparency standard become mandatory for social platforms"],
  ["Le marché des batteries sodium-ion accélérera-t-il plus vite que prévu", "Will sodium-ion battery adoption accelerate faster than expected"],
  ["Les paiements instantanés deviendront-ils le réflexe principal des jeunes actifs", "Will instant payments become the default for young professionals"],
  ["Le sport féminin atteindra-t-il un nouveau record d’audience cette saison", "Will women’s sports reach a new audience record this season"],
  ["Les créateurs indépendants gagneront-ils plus via abonnements que via publicité", "Will independent creators earn more from subscriptions than ads"],
  ["Les stablecoins seront-ils davantage utilisés pour les paiements transfrontaliers", "Will stablecoins be used more for cross-border payments"],
  ["Les entreprises publieront-elles des indicateurs climat plus lisibles", "Will companies publish clearer climate indicators"],
  ["Les régions touristiques limiteront-elles plus fortement les pics de fréquentation", "Will tourist regions cap peak visitor flows more strongly"],
];

export const signals: Signal[] = Array.from({ length: 70 }, (_, index) => {
  const topic = topics[index % topics.length];
  const category = categories[index % categories.length];
  const region = regions[index % regions.length];
  const yes = 34 + ((index * 7) % 49);
  const no = 12 + ((index * 11) % 39);
  const neutral = Math.max(6, 100 - yes - no);
  const tension = Math.min(96, Math.abs(yes - no) < 12 ? 78 + (index % 18) : 32 + ((index * 9) % 46));
  const status = index % 9 === 0 ? "resolved" : "open";
  const trend = status === "resolved" ? "Résolus" : index % 5 === 0 ? "Tension élevée" : index % 3 === 0 ? "Nouveau" : "Trending";
  return {
    id: `sig-${index + 1}`,
    slug: `${category.toLowerCase()}-${region.toLowerCase()}-${index + 1}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    title: { fr: `${topic[0]} d’ici ${index % 2 ? "12 mois" : "6 mois"} ?`, en: `${topic[1]} within ${index % 2 ? "12 months" : "6 months"}?` },
    summary: { fr: "Question structurée, formulée pour mesurer une tendance sans amplifier le bruit ni les attaques personnelles.", en: "A structured question designed to measure a trend without amplifying noise or personal attacks." },
    category,
    region,
    horizon: index % 2 ? "12 mois" : "6 mois",
    status,
    yes,
    no,
    neutral,
    tension,
    votes: 420 + index * 37,
    trend,
    nuance: ["ça dépend de la région", "ça dépend du temps", "ça dépend du revenu"],
  };
});

export const topAnalysts = [
  { username: "claire_signal", score: 982, accuracy: 74, streak: 18, badge: "Calibrée" },
  { username: "atlas_fr", score: 914, accuracy: 71, streak: 14, badge: "Long terme" },
  { username: "nora_view", score: 887, accuracy: 69, streak: 21, badge: "Nuance" },
  { username: "malo_data", score: 844, accuracy: 67, streak: 11, badge: "Tech" },
];

export const comments = [
  { author: "nora_view", body: "Je vote oui, mais seulement si le coût d’intégration baisse vraiment côté PME.", likes: 42 },
  { author: "atlas_fr", body: "Le signal régional est encore faible, j’attends deux annonces publiques avant de renforcer mon vote.", likes: 31 },
  { author: "claire_signal", body: "La majorité me semble trop confiante. Le calendrier réglementaire reste le point dur.", likes: 27 },
];
