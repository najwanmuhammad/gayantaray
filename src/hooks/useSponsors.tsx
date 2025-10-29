"use client";

import { sponsors as defaultSponsors, type SponsorItem } from "@/lib/sponsors";
import { useMemo } from "react";

type UseSponsorsOpts = {
  items?: SponsorItem[];
  onMoreClick?: () => void;
  fallbackHref?: string; // default "/sponsor"
};

export function useSponsors(opts: UseSponsorsOpts = {}) {
  const items = useMemo(
    () => (opts.items && opts.items.length ? opts.items : defaultSponsors),
    [opts.items],
  );

  const onMore = () => {
    if (typeof opts.onMoreClick === "function") return opts.onMoreClick();
    // fallback ke halaman sponsor
    window.location.href = opts.fallbackHref ?? "/sponsor";
  };

  return {
    items,
    onMore,
  };
}
