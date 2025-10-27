"use client";

import supervisor from "@/lib/supervisor";
import ButtonTwin from "../ui/ButtonTwin";
import PhotoCard from "./PhotoCard";
import { useWheelCarousel } from "@/hooks/useWheelCarousel";

export default function SupervisorSection() {
  const { active, prev, next, disabled, onWheel, getCardStyle, onCardClick } =
    useWheelCarousel(supervisor.length, { durationMs: 500 });

  return (
    <section
      className="relative min-h-full w-full bg-gradient-01 px-4 py-10 md:px-8 md:py-16"
      onWheel={onWheel}
    >
      <div className="mx-auto md:mx-8">
        <div className="mb-14">
          <h2 className="text-center font-sofia text-[40px] leading-[110%] font-bold text-lime-100 md:text-[90px] md:font-extrabold">
            STRUKTUR TIM
          </h2>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-sofia text-[30px] leading-[110%] font-semibold text-lime-100 md:text-[64px] md:font-bold">
            DOSEN PEMBIMBING
          </h3>
          <div className="ml-4 shrink-0">
            <ButtonTwin
              onPrevClick={prev}
              onNextClick={next}
              disabled={disabled}
            />
          </div>
        </div>
      </div>

      {/* stage */}
      <div className="relative mx-auto flex h-[500px] items-center justify-center md:mb-16 md:h-[130vh] lg:h-[110vh]">
        {supervisor.map((m, i) => (
          <div
            key={m.id}
            className="absolute"
            style={getCardStyle(i)}
            onClick={() => onCardClick(i)}
            aria-hidden={!(i === active)}
          >
            <PhotoCard member={m} />
          </div>
        ))}
      </div>
    </section>
  );
}
