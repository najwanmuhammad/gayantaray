"use client";

import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

interface ButtonArticleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "dark" | "light";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  iconPosition?: "right" | "left";
  iconSize?: number;
}

const ButtonArticle: React.FC<ButtonArticleProps> = ({
  children,
  variant = "default",
  size = "md",
  fullWidth = false,
  iconPosition = "right",
  iconSize = 36,
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-between font-medium transition-all duration-300 border-none cursor-pointer group hover:opacity-80";

  // Size variants
  const sizeStyles = {
    sm: "px-4 py-3 text-sm",
    md: "px-6 py-4 text-base",
    lg: "px-8 py-6 text-lg",
  };

  // Color variants
  const variantStyles = {
    default: "bg-slate-300 text-slate-800 hover:bg-slate-200",
    dark: "bg-slate-800 text-white hover:bg-slate-700",
    light: "bg-white text-slate-800 hover:bg-slate-50 shadow-sm",
  };

  // Icon styles
  const iconStyles =
    "text-lime-400 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1";

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";

  const combinedClassName = [
    baseStyles,
    sizeStyles[size],
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
      {iconPosition === "left" && (
        <ArrowUpRight size={iconSize} weight="bold" className={iconStyles} />
      )}

      <span className="flex-1 text-left">{children}</span>

      {iconPosition === "right" && (
        <ArrowUpRight size={iconSize} weight="bold" className={iconStyles} />
      )}
    </button>
  );
};

export default ButtonArticle;
