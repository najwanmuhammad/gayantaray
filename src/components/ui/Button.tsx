"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "mobile" | "dekstop";
  shape?: "angled-right" | "cut-bottom-left" | "cut-top-right";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "mobile",
  shape = "angled-right",
  fullWidth = false,
  loading = false,
  disabled,
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-200 border-none cursor-pointer relative overflow-hidden";

  // Size variants
  const sizeStyles = {
    mobile: "px-6 py-2",
    dekstop: "px-8 py-2",
  };

  // Color variants
  const variantStyles = {
    primary: "bg-lime-300 text-blue-500 hover:bg-lime-600 active:bg-lime-700",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 focus:ring-gray-500",
  };

  // Polygon shapes
  const shapeStyles = {
    "angled-right": {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 90% 100%, 0% 100%)",
    },
    "cut-bottom-left": {
      clipPath:
        "polygon(0% 0%, 100% 0%, 100% 100%, calc(20% - 17px) 100%, 0% 17px)",
    },
    "cut-top-right": {
      clipPath:
        "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 0% 100%)",
    },
  };

  // Disabled styles
  const disabledStyles =
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-current";

  // Loading styles
  const loadingStyles = loading ? "opacity-75 cursor-wait" : "";

  // Full width styles
  const widthStyles = fullWidth ? "w-full" : "";

  // Focus styles
  const focusStyles = "focus:outline-none focus:ring-2 focus:ring-offset-2";

  const combinedClassName = [
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    disabledStyles,
    loadingStyles,
    widthStyles,
    focusStyles,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={combinedClassName}
      style={{
        ...shapeStyles[shape],
        ...props.style,
      }}
    >
      {loading && (
        <svg
          className="mr-2 -ml-1 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
