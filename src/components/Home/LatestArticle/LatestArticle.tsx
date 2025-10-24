"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import ButtonTwin from "../../ui/ButtonTwin";
import ButtonArticle from "../../ui/ButtonArticle";

type Article = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  href?: string;
};

const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Gamantaray di KKI 2024",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Vel rhoncus nibh egestas sed nunc.",
    image: "/images/sample-article-1.jpg", // ganti ke path gambar riil
    href: "#",
  },
  {
    id: "2",
    title: "Eksplorasi Riset Maritim",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Vel rhoncus nibh egestas sed nunc.",
    image: "/images/sample-article-2.jpg",
    href: "#",
  },
  {
    id: "3",
    title: "Teknologi Navigasi Cerdas",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Vel rhoncus nibh egestas sed nunc.",
    image: "/images/sample-article-3.jpg",
    href: "#",
  },
];

export default function LatestArticle() {
  const [index, setIndex] = useState(0);
  const articles = useMemo(() => MOCK_ARTICLES, []);
  const current = articles[index];

  const prev = () =>
    setIndex((i) => (i - 1 + articles.length) % articles.length);
  const next = () => setIndex((i) => (i + 1) % articles.length);

  return (
    <section className="relative w-full bg-blue-500 px-4 py-10 md:px-8 md:py-16">
      {/* Heading + Nav */}
      <div className="mb-6 flex items-center justify-between md:mb-10">
        <h2 className="h2">
          <span className="text-pearl-100">ARTIKEL </span>
          <span className="text-lime-500">TERBARU</span>
        </h2>

        {/* Nav twin buttons */}
        <div className="ml-4">
          <ButtonTwin
            size="md"
            onPrevClick={prev}
            onNextClick={next}
            disabled={{
              prev: articles.length <= 1,
              next: articles.length <= 1,
            }}
          />
        </div>
      </div>

      {/* Layout: mobile stack, desktop grid */}
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
        {/* Left: Big carousel image */}
        <div className="relative md:col-span-7 lg:col-span-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-pearl-700/30">
            <Image
              key={current.id}
              src={current.image}
              alt={current.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
          </div>

          {/* Dots indicator (desktop terlihat di bawah gambar; mobile juga) */}
          <div className="mt-3 flex items-center gap-2 md:mt-4">
            {articles.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-opacity ${
                  i === index
                    ? "bg-pearl-100 opacity-100"
                    : "bg-pearl-700 opacity-60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Overlay article card (MOBILE only) */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-20 mx-0 md:hidden">
            <div
              className="pointer-events-auto mx-2 rounded-lg border border-pearl-700/30 bg-pearl-600/80 p-4 backdrop-blur"
              style={{
                clipPath:
                  "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 17px 100%, 0% calc(100% - 17px))",
              }}
            >
              <p className="body-medium text-blue-500">{current.excerpt}</p>
              <div className="mt-2">
                <ButtonArticle
                  variant="light"
                  size="sm"
                  iconPosition="right"
                  iconSize={24}
                  onClick={() =>
                    current.href ? (location.href = current.href) : null
                  }
                  aria-label="Baca artikel"
                  className="bg-pearl-500"
                >
                  Baca selengkapnya
                </ButtonArticle>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Side list (DESKTOP) */}
        <div className="hidden md:col-span-5 md:block lg:col-span-4">
          <div className="flex flex-col gap-5">
            {articles.slice(0, 3).map((a, i) => (
              <button
                key={a.id}
                onClick={() => setIndex(i)}
                className={`w-full cursor-pointer rounded-lg border px-6 py-6 text-left transition ${
                  i === index
                    ? "border-pearl-700/40 bg-pearl-600"
                    : "border-pearl-700/30 bg-blue-400/40 hover:bg-blue-400/55"
                }`}
                style={{
                  clipPath:
                    "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 0% 100%)",
                }}
              >
                <p className="body-medium text-pearl-100">{a.excerpt}</p>
              </button>
            ))}

            {/* CTA Selengkapnya */}
            <div className="pt-2">
              <button
                className="body-medium-bold inline-flex items-center px-6 py-4 text-blue-500"
                style={{
                  backgroundColor: "var(--color-lime-500)",
                  clipPath:
                    "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 0% 100%)",
                }}
                onClick={() => (location.href = "#")}
              >
                SELENGKAPNYA
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to compensate mobile overlay height */}
      <div className="h-28 md:hidden" />
    </section>
  );
}
