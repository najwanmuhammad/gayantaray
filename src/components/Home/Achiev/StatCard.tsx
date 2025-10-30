// components/Home/Achiev/StatCard.tsx
"use client";

interface StatCardProps {
  label: string;
  value: number;
  bg: string;
  textClass?: string;
}

export default function StatCard({
  label,
  value,
  bg,
  textClass = "text-lime-100",
}: StatCardProps) {
  return (
    <div
      className="clip-double-path border-pearl-700/30 p-5"
      style={{ background: bg }}
    >
      <div className="body-medium-bold text-blue-500/95">{label}</div>
      <div className={`h1 mt-2 ${textClass}`}>{value}</div>
    </div>
  );
}
