"use client";

import PhotoCard from "./PhotoCard";
import ButtonTwin from "../ui/ButtonTwin";
import { useWheelCarousel } from "@/hooks/useWheelCarousel";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface TeamSectionProps {
  section: {
    id: string;
    title: string;
    members: TeamMember[];
  };
  index: number;
}

export function TeamStructure({ section, index }: TeamSectionProps) {
  const isEvenIndex = index % 2 === 0;
  const bgColor = isEvenIndex ? "bg-teal-400" : "bg-blue-500";
  const textColor = isEvenIndex ? "text-teal-900" : "text-lime-100";

  const { active, prev, next, disabled, onWheel, getCardStyle, onCardClick } =
    useWheelCarousel(section?.members?.length ?? 0, { durationMs: 500 });

  return (
    <section
      className={`min-h-full w-full px-4 py-10 md:px-8 md:py-16 ${bgColor}`}
      onWheel={onWheel}
    >
      <div className="mx-auto md:mx-8">
        {/* Header with title and navigation */}
        <div className="mb-2 flex items-center justify-between">
          {/* Title Section */}
          <div className="min-w-0">
            <h3
              className={`font-sofia text-[30px] leading-[110%] font-semibold md:text-[64px] md:font-bold ${textColor}`}
            >
              {section.title}
            </h3>
          </div>
          {/* Navigation Buttons*/}
          <div className="ml-4 shrink-0">
            <ButtonTwin
              onPrevClick={prev}
              onNextClick={next}
              disabled={disabled}
            />
          </div>
        </div>

        <div className="relative mx-auto flex h-[500px] items-center justify-center md:mb-16 md:h-[130vh] lg:h-[110vh]">
          {(section.members ?? []).map((m, i) => (
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
      </div>
    </section>
  );
}
