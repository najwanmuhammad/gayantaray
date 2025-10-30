export type Article = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  href?: string;
  category?: string;
  publishedAt?: string;
};

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Gamantaray di KKI 2024",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Vel rhoncus nibh egestas sed nunc. Lorem ipsum dolor sit amet consectetur. Vel rhoncus nibh egestas sed nunc.",
    image: "/images/galeri/a.png",
    href: "/artikel/gamantaray-kki-2024",
    category: "Event",
    publishedAt: "2024-03-15",
  },
  {
    id: "2",
    title: "Eksplorasi Riset Maritim",
    excerpt:
      "Penelitian terbaru mengenai ekosistem laut dalam dan teknologi observasi bawah air yang dilakukan tim Gamantaray.",
    image: "/images/galeri/b.png",
    href: "/artikel/eksplorasi-riset-maritim",
    category: "Research",
    publishedAt: "2024-03-10",
  },
  {
    id: "3",
    title: "Teknologi Navigasi Cerdas",
    excerpt:
      "Pengembangan sistem navigasi autonomous untuk kendaraan bawah air menggunakan AI dan sensor canggih.",
    image: "/images/galeri/c.png",
    href: "/artikel/teknologi-navigasi-cerdas",
    category: "Technology",
    publishedAt: "2024-03-05",
  },
];
