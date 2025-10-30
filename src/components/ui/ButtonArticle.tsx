"use client";

import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

interface ButtonArticleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  excerpt?: string;
  variant?: "default";
  fullWidth?: boolean;
  iconSize?: number;
  isActive?: boolean;
}

const ButtonArticle: React.FC<ButtonArticleProps> = ({
  title,
  excerpt,
  variant = "default",
  fullWidth = false,
  iconSize = 32,
  isActive = false,
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles =
    "relative inline-flex flex-col items-start justify-start gap-2 font-barlow transition-all duration-300 border-none cursor-pointer group overflow-hidden";

  // Padding untuk memberi ruang pada icon
  const paddingStyles = "px-6 py-5 pr-14";

  // Color variants dengan opacity
  const variantStyles = {
    default: isActive
      ? "bg-[#B3CED0]" // Active/selected state
      : "bg-[#B3CED0]/50 hover:bg-[#B3CED0] active:bg-[#B3CED0]", // Default state
  };

  // Text color conditional berdasarkan isActive
  const titleColorClass = isActive ? "text-blue-500" : "text-lime-100";

  const excerptColorClass = isActive ? "text-blue-500/80" : "text-lime-100/80";

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";

  const combinedClassName = [
    baseStyles,
    paddingStyles,
    variantStyles[variant],
    widthStyles,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      className={combinedClassName}
      style={{
        clipPath:
          "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 0% 100%)",
        ...props.style,
      }}
    >
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-start gap-1 text-left">
        {/* Title */}
        <h3
          className={`text-base leading-tight font-semibold transition-colors duration-300 md:text-lg ${titleColorClass}`}
        >
          {title}
        </h3>

        {/* Excerpt (optional) */}
        {excerpt && (
          <p
            className={`text-sm leading-relaxed font-normal transition-colors duration-300 md:text-base ${excerptColorClass}`}
          >
            {excerpt}
          </p>
        )}
      </div>

      {/* Arrow icon - absolute positioned di top-right */}
      <div className="absolute top-2 right-2 z-20 flex h-12 w-12 items-center justify-center">
        <ArrowUpRight
          size={iconSize}
          className="text-lime-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110"
        />
      </div>
    </button>
  );
};

export default ButtonArticle;
