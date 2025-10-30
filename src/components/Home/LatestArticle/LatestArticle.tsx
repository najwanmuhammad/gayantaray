"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import ButtonTwin from "../../ui/ButtonTwin";
import ButtonArticle from "../../ui/ButtonArticle";
import Button from "@/components/ui/Button";
import { ARTICLES } from "@/lib/articles";

export default function LatestArticle() {
  const [index, setIndex] = useState(0);
  const articles = useMemo(() => ARTICLES, []);
  const current = articles[index];

  const prev = () =>
    setIndex((i) => (i - 1 + articles.length) % articles.length);
  const next = () => setIndex((i) => (i + 1) % articles.length);

  return (
    <section className="relative w-full bg-blue-500">
      <div className="relative font-sofia">
        <h2
          aria-hidden="true"
          className="text-stroke-blue pointer-events-none absolute inset-0 top-2 left-0 z-0 text-[90px] leading-[110%] select-none md:top-5 md:text-9xl lg:top-30 lg:leading-[90%] xl:top-5 xl:text-[180px]"
        >
          <span className="font-extrabold">ARTIKEL TERBARU</span>
        </h2>
      </div>
      <div className="py-10 md:px-8 md:py-16 xl:px-24">
        {/* Heading + Nav */}
        <div className="mb-6 flex items-center justify-between px-4 md:mb-10 md:px-0">
          <h2 className="h2 relative z-10">
            <span className="text-lime-100">ARTIKEL </span>
            <span className="text-lime-600">TERBARU</span>
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
          <div className="relative md:col-span-7">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none md:rounded-xl">
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

            {/* Dots indicator */}
            <div className="mt-3 flex items-center justify-center gap-2 md:mt-4">
              {articles.map((a, i) => (
                <button
                  key={a.id}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "scale-125 bg-lime-400 opacity-100"
                      : "bg-pearl-100 opacity-60 hover:opacity-80"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Overlay article card (MOBILE) */}
            <div className="relative -mt-20 px-4 md:hidden">
              <ButtonArticle
                title={current.title}
                excerpt={current.excerpt}
                onClick={() => {
                  if (current.href) window.location.href = current.href;
                }}
                isActive={false}
                fullWidth
              />
            </div>
          </div>

          {/* Right: Side list (DESKTOP) */}
          <div className="hidden md:col-span-5 md:block">
            <div className="flex flex-col gap-5">
              {articles.map((a, i) => (
                <ButtonArticle
                  title={a.title}
                  excerpt={a.excerpt}
                  key={a.id}
                  onClick={() => setIndex(i)}
                  isActive={index === i}
                />
              ))}

              {/* CTA Selengkapnya */}
              <div className="pt-2">
                <Button
                  className="button-text"
                  size="dekstop"
                  onClick={() => (location.href = "/artikel")}
                >
                  SELENGKAPNYA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
