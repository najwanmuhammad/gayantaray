export type YearRecap = {
  year: number;
  gold: number;
  silver: number;
  bronze: number;
};

export const ACHIEVEMENTS: YearRecap[] = [
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

export const ACHIEVEMENT_YEARS = ACHIEVEMENTS.map((d) => d.year).sort(
  (a, b) => a - b,
);
