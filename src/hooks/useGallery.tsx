"use client";

import { useRef, useMemo, useEffect, useState, useCallback } from "react";
import { GALLERY_ITEMS, type GalleryItem } from "@/lib/gallery";

type UseGalleryOpts = {
  items?: GalleryItem[];
  auto?: boolean;
  intervalMs?: number;
  transitionDuration?: number;
};

export function useGallery({
  items,
  auto = true,
  intervalMs = 4000,
  transitionDuration = 800,
}: UseGalleryOpts = {}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const data = useMemo(() => (items?.length ? items : GALLERY_ITEMS), [items]);

  // Triple clone untuk seamless infinite loop
  const extendedData = useMemo(() => [...data, ...data, ...data], [data]);

  const [currentIndex, setCurrentIndex] = useState(data.length);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /** Calculate transform value */
  const getTransform = useCallback(() => {
    const el = containerRef.current;
    if (!el?.children.length) return 0;

    const firstChild = el.children[0] as HTMLElement;
    const itemWidth = firstChild.offsetWidth;
    const gap = 16;

    return -(currentIndex * (itemWidth + gap));
  }, [currentIndex]);

  /** Navigate to next/prev slide */
  const slide = useCallback(
    (direction: "prev" | "next") => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setEnableTransition(true);
      setCurrentIndex((prev) => (direction === "next" ? prev + 1 : prev - 1));

      setTimeout(() => setIsTransitioning(false), transitionDuration);
    },
    [isTransitioning, transitionDuration],
  );

  /** Reset position for infinite loop */
  useEffect(() => {
    const shouldReset =
      currentIndex >= data.length * 2 || currentIndex < data.length;

    if (!shouldReset || isTransitioning) return;

    const resetTimer = setTimeout(() => {
      setEnableTransition(false);

      const resetIndex =
        currentIndex >= data.length * 2
          ? currentIndex - data.length
          : currentIndex + data.length;

      requestAnimationFrame(() => {
        setCurrentIndex(resetIndex);

        // Re-enable transition after reset
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }, 50);

    return () => clearTimeout(resetTimer);
  }, [currentIndex, data.length, isTransitioning]);

  /** Auto slide */
  useEffect(() => {
    if (!auto) return;

    autoIntervalRef.current = setInterval(() => slide("next"), intervalMs);

    return () => {
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current);
    };
  }, [auto, intervalMs, slide]);

  /** Manual slide with auto-restart */
  const handleManualSlide = useCallback(
    (direction: "prev" | "next") => {
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current);

      slide(direction);

      if (auto) {
        autoIntervalRef.current = setInterval(() => slide("next"), intervalMs);
      }
    },
    [slide, auto, intervalMs],
  );

  return {
    containerRef,
    items: extendedData,
    transform: getTransform(),
    enableTransition,
    transitionDuration,
    slide: handleManualSlide,
  };
}
