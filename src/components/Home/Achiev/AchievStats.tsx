"use client";

import { useMemo, useState } from "react";
import ButtonArticle from "../../ui/ButtonArticle";

// Contoh data—silakan ganti dari API/DB-mu
type YearRecap = {
  year: number;
  gold: number;
  silver: number;
  bronze: number;
};

const DATA: YearRecap[] = [
  { year: 2017, gold: 1, silver: 0, bronze: 2 },
  { year: 2018, gold: 1, silver: 0, bronze: 2 },
  { year: 2019, gold: 2, silver: 1, bronze: 1 },
  { year: 2020, gold: 0, silver: 2, bronze: 1 },
  { year: 2021, gold: 1, silver: 2, bronze: 0 },
  { year: 2022, gold: 3, silver: 1, bronze: 2 },
  { year: 2023, gold: 2, silver: 3, bronze: 1 },
  { year: 2024, gold: 4, silver: 1, bronze: 0 },
  { year: 2025, gold: 1, silver: 2, bronze: 2 },
];

const years = DATA.map((d) => d.year).sort((a, b) => a - b);
const yearOptions = years;

type YearFilter = number | "all";

export default function AchievStats() {
  const [selectedYear, setSelectedYear] = useState<YearFilter>("all");

  const filtered = useMemo(() => {
    if (selectedYear === "all") return DATA;
    return DATA.filter((d) => d.year === selectedYear);
  }, [selectedYear]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    setSelectedYear(v === "all" ? "all" : Number(v)); // <-- konversi dari string
  };

  const totals = useMemo(() => {
    return filtered.reduce(
      (acc, d) => {
        acc.gold += d.gold;
        acc.silver += d.silver;
        acc.bronze += d.bronze;
        return acc;
      },
      { gold: 0, silver: 0, bronze: 0 },
    );
  }, [filtered]);

  return (
    <section
      className="w-full px-4 py-10 md:px-8 md:py-16"
      style={{ backgroundImage: "var(--background-image-gradient-01)" }}
    >
      {/* Header + Filter */}
      <div className="mb-6 flex flex-col gap-4 md:mb-10 md:flex-row md:items-center md:justify-between">
        <h2 className="h2 text-pearl-100">PENCAPAIAN</h2>

        <div className="flex items-center gap-3">
          <span className="body-small md:body-medium text-pearl-700">
            Periode
          </span>

          <select
            value={String(selectedYear)}
            onChange={handleChange}
            className="rounded-md border border-pearl-700/40 bg-blue-500/30 px-3 py-2 text-pearl-100"
          >
            {/* Opsi 'All' */}
            <option value="all" className="text-blue-500">
              All
            </option>

            {/* Semua tahun */}
            {yearOptions.map((y) => (
              <option key={y} value={y} className="text-blue-500">
                {y}
              </option>
            ))}
          </select>
        </div>
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
        <ButtonArticle
          onClick={() => (location.href = "/pencapaian")}
          variant="light"
          size="md"
          className="text-blue-500"
          style={{
            backgroundColor: "var(--color-lime-500)",
            clipPath:
              "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 0% 100%)",
          }}
        >
          SELENGKAPNYA
        </ButtonArticle>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  bg,
  textClass = "text-pearl-100",
}: {
  label: string;
  value: number;
  bg: string;
  textClass?: string;
}) {
  return (
    <div
      className="rounded-xl border border-pearl-700/30 p-5"
      style={{ background: bg }}
    >
      <div className="body-small-bold text-blue-500/80">{label}</div>
      <div
        className={`mt-2 font-sofia text-[48px] leading-none font-extrabold ${textClass}`}
      >
        {value}
      </div>
    </div>
  );
}
