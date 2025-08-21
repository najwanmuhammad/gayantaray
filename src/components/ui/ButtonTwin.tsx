"use client";

import React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface ButtonTwinProps {
  onPrevClick?: () => void;
  onNextClick?: () => void;
  disabled?: {
    prev?: boolean;
    next?: boolean;
  };
  size?: "sm" | "md" | "lg";
}

const ButtonTwin: React.FC<ButtonTwinProps> = ({
  onPrevClick,
  onNextClick,
  disabled = {},
  size = "md",
}) => {
  // Size configurations
  const sizeClasses = {
    sm: "w-10 h-7 text-sm",
    md: "w-12 h-9 text-base",
    lg: "w-14 h-11 text-lg",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <div className="flex items-center">
      {/* Previous Button */}
      <button
        onClick={onPrevClick}
        disabled={disabled.prev}
        className={` ${sizeClasses[size]} relative flex cursor-pointer items-center justify-center overflow-hidden border-none bg-teal-300 font-bold text-pearl-100 transition-colors duration-200 hover:bg-teal-500 active:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50`}
        style={{
          clipPath: "polygon(0% 25%, 30% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        aria-label="Previous"
      >
        <CaretLeft
          size={iconSizes[size]}
          weight="bold"
          className="text-pearl-100"
        />
      </button>

      {/* Next Button */}
      <button
        onClick={onNextClick}
        disabled={disabled.next}
        className={` ${sizeClasses[size]} relative flex cursor-pointer items-center justify-center overflow-hidden border-none bg-lime-300 font-bold text-blue-500 transition-colors duration-200 hover:bg-lime-600 active:bg-lime-700 disabled:cursor-not-allowed disabled:opacity-50`}
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 70% 100%, 0% 100%)",
        }}
        aria-label="Next"
      >
        <CaretRight
          size={iconSizes[size]}
          weight="bold"
          className="text-blue-500"
        />
      </button>
    </div>
  );
};

export default ButtonTwin;
