"use client";

import Image from "next/image";
import { useRef } from "react";
import ButtonTwin from "../../ui/ButtonTwin";

type GalleryItem = { src: string; alt?: string };

type GalleryProps = {
  items?: GalleryItem[];
  onMoreClick?: () => void;
};

const DEFAULT_ITEMS: GalleryItem[] = [
  { src: "/images/gallery-1.jpg", alt: "Kemenangan lomba 1" },
  { src: "/images/gallery-2.jpg", alt: "Kemenangan lomba 2" },
  { src: "/images/gallery-3.jpg", alt: "Kemenangan lomba 3" },
  // Tambah lagi jika perlu…
];

export default function Gallery({
  items = DEFAULT_ITEMS,
  onMoreClick,
}: GalleryProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const slide = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section
      className="w-full px-4 py-10 md:px-8 md:py-16"
      style={{ backgroundImage: "var(--background-image-gradient-01)" }}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between md:mb-10">
        <h2 className="h2 text-pearl-100">GALERI</h2>

        {/* Mobile: CTA Selengkapnya */}
        <button
          className="body-medium-bold px-4 py-3 text-blue-500 md:hidden"
          style={{
            backgroundColor: "var(--color-lime-500)",
            clipPath:
              "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 0% 100%)",
          }}
          onClick={() =>
            onMoreClick ? onMoreClick() : (location.href = "/galeri")
          }
          aria-label="Lihat semua galeri"
        >
          SELENGKAPNYA
        </button>

        {/* Desktop: Twin arrows */}
        <div className="hidden md:block">
          <ButtonTwin
            onPrevClick={() => slide("prev")}
            onNextClick={() => slide("next")}
          />
        </div>
      </div>

      {/* Content */}
      {/* Mobile: stack images; Desktop: horizontal scroll with 3+ tiles */}
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-x-visible"
        // hide scrollbar in webkit
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((it, idx) => (
          <div
            key={idx}
            className="w-[88vw] shrink-0 snap-start md:w-auto md:shrink md:snap-none"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-pearl-700/30">
              <Image
                src={it.src}
                alt={it.alt ?? `Galeri ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 88vw"
                priority={idx < 3}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
