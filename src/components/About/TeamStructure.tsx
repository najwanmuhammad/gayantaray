"use client";

import { useRef, useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const isEvenIndex = index % 2 === 0;
  const bgColor = isEvenIndex ? "bg-teal-400" : "bg-blue-500";
  const textColor = isEvenIndex ? "text-teal-900" : "text-lime-100";

  return (
    <section className={`w-full min-h-screen px-4 py-12 md:px-8 md:py-16 ${bgColor}`}>
      <div className="mx-auto md:mx-8">
        {/* Header with title and navigation */}
        <div className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-start md:justify-between md:gap-8">
          {/* Title Section */}
          <div className="flex-1">
            <h2
              className={`mb-3 font-sofia text-[30px] leading-[110%] font-semibold md:text-[64px] md:font-bold ${textColor}`}
            >
              {section.title}
            </h2>
          </div>

          {/* Navigation Buttons - positioned on right */}
          <div className="flex flex-shrink-0 gap-2 md:gap-3">
            <button
              onClick={() => scroll("left")}
              className={`rounded-lg p-2 transition-colors md:p-3 ${
                canScrollLeft
                  ? "bg-teal-600 text-white hover:bg-teal-700"
                  : "cursor-not-allowed bg-gray-600 text-gray-400"
              }`}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <CaretLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`rounded-lg p-2 transition-colors md:p-3 ${
                canScrollRight
                  ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500"
                  : "cursor-not-allowed bg-gray-600 text-gray-400"
              }`}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <CaretRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>

        <div
          className="perspective"
          style={{
            perspective: "1200px",
          }}
        >
          {/* Scrollable Container with wheel effect */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 md:gap-6"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {section.members.map((member) => (
              <PhotoCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
