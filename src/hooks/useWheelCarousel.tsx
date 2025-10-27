"use client";

import { useRef, useState } from "react";

type Options = {
  /** durasi animasi (ms) untuk sync cooldown */
  durationMs?: number;
};

export function useWheelCarousel(total: number, opts: Options = {}) {
  const durationMs = opts.durationMs ?? 500;

  // state & batas
  const [active, setActive] = useState(0);
  const max = Math.max(0, total - 1);

  const prev = () => setActive((i) => (i < max ? i + 1 : i));
  const next = () => setActive((i) => (i > 0 ? i - 1 : i));

  const disabled = { prev: active === max, next: active === 0 };

  // cooldown untuk wheel/klik agar animasi halus
  const coolRef = useRef(false);
  const triggerWithCooldown = (fn: () => void) => {
    if (coolRef.current) return;
    coolRef.current = true;
    fn();
    setTimeout(() => (coolRef.current = false), durationMs);
  };

  // wheel handler
  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta > 18) triggerWithCooldown(prev);
    else if (delta < -18) triggerWithCooldown(next);
  };

  // hitung style kartu
  const getCardStyle = (
    index: number,
  ): React.CSSProperties & {
    pointerEvents: "auto" | "none";
    cursor: "pointer" | "default";
    zIndex: number;
    opacity: number;
  } => {
    const rel = index - active; // -2,-1,0,1,2,…
    const LEFT_X = "translateX(-140%)";
    const RIGHT_X = "translateX(140%)";

    let transform = "translateX(0) rotate(0deg) scale(1)";
    let z = 1;
    let opacity = 0;

    // center
    if (rel === 0) {
      transform = "translateX(0) rotate(0deg) scale(1)";
      z = 3;
      opacity = 1;
    // left
    } else if (rel === -1) {
      transform = `${LEFT_X} rotate(-15deg) scale(1) translateY(10%)`;
      z = 2;
      opacity = 0.8;
    // right 
    } else if (rel === 1) {
      transform = `${RIGHT_X} rotate(15deg) scale(1) translateY(10%)`;
      z = 2;
      opacity = 0.8;
    } else if (rel <= -2) {
      transform =
        "translateX(-220%) rotate(-14deg) scale(.86) translateY(12px)";
      opacity = 0;
      z = 1;
    } else if (rel >= 2) {
      transform = "translateX(220%) rotate(14deg) scale(.86) translateY(12px)";
      opacity = 0;
      z = 1;
    }

    return {
      left: "50%",
      transform: `translateX(-50%) ${transform}`,
      zIndex: z,
      opacity,
      pointerEvents: rel === 0 || rel === -1 || rel === 1 ? "auto" : "none",
      cursor: rel === -1 || rel === 1 ? "pointer" : "default",
      transition: `transform ${durationMs}ms cubic-bezier(.22,.61,.36,1), opacity ${durationMs}ms`,
      willChange: "transform, opacity",
    };
  };

  // klik kartu kiri/kanan → geser
  const onCardClick = (index: number) => {
    const rel = index - active;
    if (rel === 1) triggerWithCooldown(prev);
    if (rel === -1) triggerWithCooldown(next);
  };

  return {
    active,
    max,
    prev: () => triggerWithCooldown(prev),
    next: () => triggerWithCooldown(next),
    disabled,
    onWheel,
    getCardStyle,
    onCardClick,
  };
}
