"use client";

import Image from "next/image";
import ButtonTwin from "../../ui/ButtonTwin";
import { useGallery } from "@/hooks/useGallery";
import type { GalleryItem } from "@/lib/gallery";

type GalleryProps = {
  items?: GalleryItem[];
};

export default function Gallery({ items }: GalleryProps) {
  const {
    containerRef,
    items: data,
    transform,
    enableTransition,
    transitionDuration,
    slide,
  } = useGallery({ items });

  return (
    <section className="w-full bg-gradient-01">
      <div className="relative font-sofia">
        <h2
          aria-hidden="true"
          className="text-stroke-black pointer-events-none absolute inset-0 top-2 left-0 z-0 text-[90px] leading-[110%] select-none md:top-5 md:text-9xl lg:top-30 lg:leading-[90%] xl:top-5 xl:text-[180px]"
        >
          <span className="font-extrabold">GALERI</span>
        </h2>
      </div>

      <div className="px-4 py-10 md:px-8 md:py-16 xl:px-24">
        <div className="mb-6 flex items-center justify-between md:mb-10">
          <h2 className="h2 relative z-10 text-lime-100">GALERI</h2>
          <div>
            <ButtonTwin
              onPrevClick={() => slide("prev")}
              onNextClick={() => slide("next")}
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-4"
            style={{
              transform: `translate3d(${transform}px, 0, 0)`,
              transition: enableTransition
                ? `transform ${transitionDuration}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
                : "none",
              willChange: "transform",
            }}
          >
            {data.map((it, idx) => (
              <figure
                key={`gallery-${idx}`}
                className="relative w-[75vw] shrink-0 md:w-[50vw] lg:w-[42vw] xl:w-[29vw]"
              >
                <div className="group relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={it.src}
                    alt={it.alt ?? `Galeri ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(min-width:1280px) 36vw, (min-width:1024px) 42vw, (min-width:768px) 58vw, 86vw"
                    priority={idx < 5}
                  />
                </div>
                {it.alt && (
                  <figcaption className="sr-only">{it.alt}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
