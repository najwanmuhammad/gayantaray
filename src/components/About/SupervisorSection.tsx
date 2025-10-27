"use client";

import { useState, useRef } from "react";
import supervisor from "@/lib/supervisor";
import ButtonTwin from "../ui/ButtonTwin";
import PhotoCard from "./PhotoCard";

export default function SupervisorSection() {
  const [active, setActive] = useState(0);
  const max = supervisor.length - 1;

  const prev = () => setActive((i) => (i < max ? i + 1 : i));
  const next = () => setActive((i) => (i > 0 ? i - 1 : i));

  const coolRef = useRef(false);

  const triggerWithCooldown = (fn: () => void) => {
    if (coolRef.current) return;
    coolRef.current = true;
    fn();
    // cooldown animasi 500ms
    setTimeout(() => (coolRef.current = false), 500);
  };

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta > 18) triggerWithCooldown(prev);
    else if (delta < -18) triggerWithCooldown(next);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-01 px-4 py-10 md:px-8 md:py-16"
      onWheel={onWheel}
    >
      <div className="mx-auto">
        <div className="mb-14">
          <h2 className="text-center font-sofia text-[40px] leading-[110%] font-bold text-lime-100 md:text-[90px] md:font-extrabold">
            STRUKTUR TIM
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-sofia text-[30px] leading-[110%] font-semibold text-lime-100 md:text-[64px] md:font-bold">
            DOSEN PEMBIMBING
          </h3>
          <ButtonTwin
            onPrevClick={prev}
            onNextClick={next}
            disabled={{ prev: active === max, next: active === 0 }}
          />
        </div>
      </div>

      {/* stage */}
      <div className="relative mx-auto flex h-[500px] items-center justify-center md:mb-16 md:h-[130vh] lg:h-[110vh]">
        {supervisor.map((m, i) => {
          const rel = i - active; // -2,-1,0,1,2,…
          // jarak kiri/kanan dari pusat (semakin besar semakin jauh)
          const LEFT_X = "translateX(-140%)";
          const RIGHT_X = "translateX(140%)";

          let transform = "translateX(0) rotate(0deg) scale(1)";
          let z = 1;
          let opacity = 0;

          if (rel === 0) {
            // tengah
            transform = "translateX(0) rotate(0deg) scale(1)";
            z = 3;
            opacity = 1;
          } else if (rel === -1) {
            // kiri
            transform = `${LEFT_X} rotate(-15deg) scale(1) translateY(10%)`;
            z = 2;
            opacity = 0.8;
          } else if (rel === 1) {
            // kanan
            transform = `${RIGHT_X} rotate(15deg) scale(1) translateY(10%)`;
            z = 2;
            opacity = 0.8;
          } else if (rel <= -2) {
            // jauh di kiri → makin kecil & tembus
            transform =
              "translateX(-220%) rotate(-14deg) scale(.86) translateY(12px)";
            opacity = 0;
            z = 1;
          } else if (rel >= 2) {
            // jauh di kanan
            transform =
              "translateX(220%) rotate(14deg) scale(.86) translateY(12px)";
            opacity = 0;
            z = 1;
          }

          const handleClick = () => {
            if (rel === 1) triggerWithCooldown(prev);
            if (rel === -1) triggerWithCooldown(next);
          };

          return (
            <div
              key={m.id}
              className="absolute transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)] will-change-transform"
              style={{
                left: "50%",
                transform: `translateX(-50%) ${transform}`,
                zIndex: z,
                opacity,
                pointerEvents:
                  rel === 0 || rel === -1 || rel === 1 ? "auto" : "none",
                cursor: rel === -1 || rel === 1 ? "pointer" : "default",
              }}
              onClick={handleClick}
              aria-hidden={!(rel === 0)}
            >
              <PhotoCard member={m} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
