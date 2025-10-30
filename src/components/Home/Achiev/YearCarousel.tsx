"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface YearCarouselProps {
  years: (number | "all")[];
  selected: number | "all";
  onPrev: () => void;
  onNext: () => void;
}

export default function YearCarousel({
  years,
  selected,
  onPrev,
  onNext,
}: YearCarouselProps) {
  const currentIndex = years.findIndex((y) => y === selected);
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= years.length - 1;

  return (
    <div className="flex items-center gap-1.5 md:gap-5">
      {/* Prev */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-300 text-lime-100 transition-all hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-40"
        style={{
          clipPath: "polygon(0% 25%, 30% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        aria-label="Previous year"
      >
        <CaretLeft size={22} weight="bold" />
      </button>

      {/* Current year display */}
      <div className="min-w-[90px] text-center font-sofia text-2xl font-bold text-lime-100 select-none md:text-4xl">
        {selected === "all" ? "All" : selected}
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={isLast}
        className="flex h-10 w-10 items-center justify-center rounded-md bg-lime-500 text-blue-500 transition-all hover:bg-lime-600 disabled:cursor-not-allowed disabled:opacity-40"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 70% 100%, 0% 100%)",
        }}
        aria-label="Next year"
      >
        <CaretRight size={22} weight="bold" />
      </button>
    </div>
  );
}
