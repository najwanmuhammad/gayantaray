"use client";

import Image from "next/image";

type SponsorItem = {
  name: string;
  logoSrc: string; // path logo di /public
  url?: string; // opsional, kalau mau klik ke situs sponsor
};

type SponsorProps = {
  items?: SponsorItem[];
  onMoreClick?: () => void;
};

const DEFAULT_SPONSORS: SponsorItem[] = [
  {
    name: "Waroeng SS",
    logoSrc: "/images/sponsors/waroeng-ss.png",
    url: "https://waroengss.com",
  },
  // Tambah sponsor lain di sini…
];

export default function Sponsor({
  items = DEFAULT_SPONSORS,
  onMoreClick,
}: SponsorProps) {
  return (
    <section
      className="w-full px-4 py-10 md:px-8 md:py-16"
      style={{ backgroundImage: "var(--background-image-gradient-01)" }}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between md:mb-10">
        <h2 className="h2 text-pearl-100">SPONSOR</h2>

        {/* CTA Selengkapnya */}
        <button
          className="body-medium-bold hidden px-6 py-3 text-blue-500 md:inline-flex"
          style={{
            backgroundColor: "var(--color-lime-500)",
            clipPath:
              "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 0% 100%)",
          }}
          onClick={() =>
            onMoreClick ? onMoreClick() : (location.href = "/sponsor")
          }
          aria-label="Lihat semua sponsor"
        >
          SELENGKAPNYA
        </button>

        {/* Mobile CTA (letaknya sama seperti desain: kanan header) */}
        <button
          className="body-medium-bold px-4 py-3 text-blue-500 md:hidden"
          style={{
            backgroundColor: "var(--color-lime-500)",
            clipPath:
              "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 0% 100%)",
          }}
          onClick={() =>
            onMoreClick ? onMoreClick() : (location.href = "/sponsor")
          }
          aria-label="Lihat semua sponsor"
        >
          SELENGKAPNYA
        </button>
      </div>

      {/* CARD pembungkus semua logo */}
      <div className="rounded-2xl border border-pearl-700/30 bg-pearl-600/5 p-4 backdrop-blur md:p-6">
        {/* Grid logo – responsif dan auto-wrap */}
        <div className="grid [grid-template-columns:repeat(2,minmax(0,1fr))] gap-4 sm:[grid-template-columns:repeat(3,minmax(0,1fr))] md:[grid-template-columns:repeat(4,minmax(0,1fr))] md:gap-6 lg:[grid-template-columns:repeat(5,minmax(0,1fr))]">
          {items.map((s, i) => {
            const Box = s.url ? "a" : "div";
            return (
              <Box
                key={s.name + i}
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
                    className="object-contain brightness-95 group-hover:brightness-110"
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
    </section>
  );
}
