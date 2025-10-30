"use client";

import Button from "../../ui/Button";
import { useAchievStats } from "@/hooks/useAchievStats";
import StatCard from "./StatCard";
import YearCarousel from "./YearCarousel";

export default function AchievStats() {
  const { selectedYear, selectYear, options, totals } = useAchievStats("all");

  const currentIndex = options.findIndex((y) => y === selectedYear);
  const prev = () => {
    if (currentIndex > 0) selectYear(options[currentIndex - 1]);
  };
  const next = () => {
    if (currentIndex < options.length - 1)
      selectYear(options[currentIndex + 1]);
  };

  return (
    <section className="w-full bg-blue-500">
      <div className="relative font-sofia">
        <h2
          aria-hidden="true"
          className="text-stroke-blue pointer-events-none absolute inset-0 top-2 left-0 z-0 text-[90px] leading-[110%] select-none md:top-5 md:text-9xl lg:top-30 lg:leading-[90%] xl:top-5 xl:text-[180px]"
        >
          <span className="font-extrabold">PENCAPAIAN</span>
        </h2>
      </div>

      <div className="px-4 py-10 md:px-8 md:py-16">
        {/* Header + Filter */}
        <div className="mb-6 flex flex-col gap-6 md:mb-10 md:flex-row md:items-center md:justify-between">
          <h2 className="h2 relative z-10 text-lime-100">PENCAPAIAN</h2>

          {/* Year carousel in the right */}
          <YearCarousel
            years={options}
            selected={selectedYear}
            onPrev={prev}
            onNext={next}
          />
        </div>

        {/* Ringkasan Counter */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <StatCard
            label="JUARA 1"
            value={totals.gold}
            bg="var(--color-lime-500)"
            textClass="text-blue-500"
          />
          <StatCard
            label="JUARA 2"
            value={totals.silver}
            bg="color-mix(in oklab, var(--color-pearl-600), transparent 30%)"
          />
          <StatCard
            label="JUARA 3"
            value={totals.bronze}
            bg="color-mix(in oklab, orange, transparent 60%)"
          />
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Button
            onClick={() => (location.href = "/pencapaian")}
            size="dekstop"
            className="button-text text-blue-500"
            shape="angled-right"
            variant="primary"
          >
            SELENGKAPNYA
          </Button>
        </div>
      </div>
    </section>
  );
}
