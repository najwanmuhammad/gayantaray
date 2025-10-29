"use client";

import Image from "next/image";
import Button from "../../ui/Button";
import { useSponsors } from "@/hooks/useSponsors";
import type { SponsorItem } from "@/lib/sponsors";

type SponsorProps = {
  items?: SponsorItem[];
  onMoreClick?: () => void;
};

export default function Sponsors({ items, onMoreClick }: SponsorProps) {
  const { items: data, onMore } = useSponsors({ items, onMoreClick });

  return (
    <section className="w-full bg-gradient-01">
      <div className="relative font-sofia">
        <h2
          aria-hidden="true"
          className="text-stroke-black pointer-events-none absolute inset-0 top-2 left-0 z-0 text-[90px] leading-[110%] select-none md:top-5 md:text-9xl lg:top-30 lg:leading-[90%] xl:top-5 xl:text-[180px]"
        >
          <span className="font-extrabold">SPONSOR</span>
        </h2>
      </div>
      <div className="px-4 py-10 md:px-8 md:py-16">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between md:mb-10">
          <h2 className="h2 relative z-10 text-lime-100">SPONSOR</h2>

          {/* CTA Selengkapnya */}
          <div className="hidden md:block">
            <Button
              className="button-text"
              variant="primary"
              size="dekstop"
              shape="angled-right"
              onClick={onMore}
              aria-label="Lihat semua sponsor"
            >
              SELENGKAPNYA
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Button
              className="button-text"
              variant="primary"
              shape="angled-right"
              size="mobile"
              onClick={onMore}
              aria-label="Lihat semua sponsor"
            >
              SELENGKAPNYA
            </Button>
          </div>
        </div>

        {/* CARD pembungkus semua logo */}
        <div className="rounded-2xl border border-pearl-700/30 bg-pearl-600/5 p-4 backdrop-blur md:p-6">
          {/* Grid logo – responsif dan auto-wrap */}
          <div className="grid [grid-template-columns:repeat(2,minmax(0,1fr))] gap-4 sm:[grid-template-columns:repeat(3,minmax(0,1fr))] md:[grid-template-columns:repeat(4,minmax(0,1fr))] md:gap-6 lg:[grid-template-columns:repeat(5,minmax(0,1fr))]">
            {data.map((s, i) => {
              const Box = s.url ? "a" : "div";
              return (
                <Box
                  key={`${s.name}-${i}`}
                  {...(s.url
                    ? { href: s.url, target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="group relative flex items-center justify-center rounded-xl border border-pearl-700/30 bg-pearl-500/10 p-4 transition-colors hover:border-lime-500/60 hover:bg-pearl-500/15 md:p-5"
                >
                  {/* Square holder agar konsisten */}
                  <div className="relative [aspect-ratio:1/1] w-full">
                    <Image
                      src={s.logoSrc}
                      alt={s.name}
                      fill
                      sizes="(min-width:1024px) 18vw, (min-width:768px) 22vw, 40vw"
                      className="object-contain brightness-95 contrast-110 group-hover:brightness-110"
                      // prioritaskan di fold pertama saja
                      priority={i < 4}
                    />
                  </div>
                  <span className="sr-only">{s.name}</span>
                </Box>
              );
            })}
          </div>
        </div>

        {/* Garis bawah tipis warna lime (sesuai desain) */}
        <div className="mt-8 h-[2px] w-full bg-lime-500/70" />
      </div>
    </section>
  );
}
