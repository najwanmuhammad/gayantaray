"use client";

import React from "react";
import Image from "next/image";

interface PhotoCardProps {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  className?: string;
  aspectRatio?: "square" | "4:3" | "16:9" | "3:4" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  overlay?: boolean;
  onClick?: () => void;
  loading?: "lazy" | "eager";
  placeholder?: boolean;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  src,
  alt = "Photo",
  title,
  description,
  className = "",
  aspectRatio = "4:3",
  size = "md",
  overlay = false,
  onClick,
  loading = "lazy",
  placeholder = false,
}) => {
  // Size variants
  const sizeStyles = {
    sm: "w-48 h-36",
    md: "w-64 h-48",
    lg: "w-80 h-60",
    xl: "w-96 h-72",
  };

  // Aspect ratio styles
  const aspectStyles = {
    square: "aspect-square",
    "4:3": "aspect-[4/3]",
    "16:9": "aspect-video",
    "3:4": "aspect-[3/4]",
    auto: "",
  };

  // Base card styles
  const cardStyles = `
    relative
    overflow-hidden
    bg-gray-300
    rounded-sm
    transition-all
    duration-300
    ${onClick ? "cursor-pointer hover:scale-105 hover:shadow-lg" : ""}
    ${aspectRatio !== "auto" ? aspectStyles[aspectRatio] : sizeStyles[size]}
  `;

  const combinedClassName = [cardStyles, className].filter(Boolean).join(" ");

  return (
    <div className={combinedClassName} onClick={onClick}>
      {/* Image */}
      {src && !placeholder ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
          loading={loading}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        // Placeholder when no image is provided
        <div className="flex h-full w-full items-center justify-center bg-gray-300">
          <svg
            className="h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="bg-opacity-40 hover:bg-opacity-20 absolute inset-0 bg-black transition-opacity duration-300" />
      )}

      {/* Content overlay */}
      {(title || description) && (
        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          {title && (
            <h3 className="mb-1 line-clamp-2 text-lg font-semibold">{title}</h3>
          )}
          {description && (
            <p className="line-clamp-3 text-sm opacity-90">{description}</p>
          )}
        </div>
      )}

      {/* Loading state */}
      {src && <div className="absolute inset-0 animate-pulse bg-gray-300" />}
    </div>
  );
};

export default PhotoCard;
