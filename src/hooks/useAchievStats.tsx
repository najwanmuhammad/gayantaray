"use client";

import { useMemo, useState } from "react";
import {
  ACHIEVEMENTS,
  ACHIEVEMENT_YEARS,
  type YearRecap,
} from "@/lib/achievements";

export type YearFilter = number | "all";

export function useAchievStats(initial: YearFilter = "all") {
  const [selectedYear, setSelectedYear] = useState<YearFilter>(initial);

  const years = ACHIEVEMENT_YEARS;
  const options: YearFilter[] = ["all", ...years];

  const filtered: YearRecap[] = useMemo(() => {
    if (selectedYear === "all") return ACHIEVEMENTS;
    return ACHIEVEMENTS.filter((d) => d.year === selectedYear);
  }, [selectedYear]);

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

  const selectYear = (value: YearFilter) => setSelectedYear(value);

  return {
    selectedYear,
    selectYear,
    options,
    filtered,
    totals,
  };
}
