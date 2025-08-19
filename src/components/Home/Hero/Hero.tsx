import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 h-32 w-32 rotate-45 border-2 border-lime-400"></div>
        <div className="absolute top-40 right-20 h-24 w-24 rotate-12 border border-lime-400"></div>
        <div className="absolute bottom-20 left-1/4 h-16 w-16 rotate-45 border border-lime-400"></div>
        <div className="absolute right-1/3 bottom-40 h-20 w-20 rotate-12 border-2 border-lime-400"></div>
      </div>

      {/* Ship Illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Large Ship */}
        <div className="absolute top-1/3 right-1/4 rotate-12 transform">
          <svg
            width="400"
            height="200"
            viewBox="0 0 400 200"
            className="fill-lime-400 opacity-80"
          >
            {/* Ship Hull */}
            <path d="M50 120 L350 120 L330 160 L70 160 Z" />
            {/* Ship Deck */}
            <rect x="60" y="100" width="280" height="20" />
            {/* Containers */}
            <rect x="80" y="70" width="40" height="30" />
            <rect x="130" y="70" width="40" height="30" />
            <rect x="180" y="70" width="40" height="30" />
            <rect x="230" y="70" width="40" height="30" />
            <rect x="280" y="70" width="40" height="30" />
            {/* Bridge */}
            <rect x="300" y="50" width="40" height="50" />
            {/* Cranes */}
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              stroke="currentColor"
              strokeWidth="3"
            />
            <line
              x1="100"
              y1="30"
              x2="140"
              y2="50"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="200"
              y1="100"
              x2="200"
              y2="30"
              stroke="currentColor"
              strokeWidth="3"
            />
            <line
              x1="200"
              y1="30"
              x2="240"
              y2="50"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Secondary Smaller Ship */}
        <div className="absolute bottom-20 left-10 -rotate-6 transform">
          <svg
            width="200"
            height="100"
            viewBox="0 0 200 100"
            className="fill-lime-400 opacity-60"
          >
            <path d="M20 60 L180 60 L170 80 L30 80 Z" />
            <rect x="30" y="50" width="140" height="10" />
            <rect x="40" y="35" width="20" height="15" />
            <rect x="70" y="35" width="20" height="15" />
            <rect x="100" y="35" width="20" height="15" />
            <rect x="130" y="30" width="25" height="20" />
          </svg>
        </div>

        {/* Top Right Ship */}
        <div className="absolute top-10 right-10 rotate-45 transform opacity-40">
          <svg
            width="150"
            height="80"
            viewBox="0 0 150 80"
            className="fill-lime-400"
          >
            <path d="M15 40 L135 40 L130 55 L20 55 Z" />
            <rect x="20" y="35" width="110" height="5" />
            <rect x="25" y="25" width="15" height="10" />
            <rect x="45" y="25" width="15" height="10" />
            <rect x="65" y="25" width="15" height="10" />
          </svg>
        </div>

        {/* Bottom Right Ship Fragment */}
        <div className="absolute right-0 bottom-32 -rotate-12 transform opacity-30">
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            className="fill-lime-400"
          >
            <path d="M10 30 L110 30 L105 45 L15 45 Z" />
            <rect x="15" y="25" width="90" height="5" />
            <circle cx="30" cy="20" r="3" />
            <circle cx="50" cy="20" r="3" />
            <circle cx="70" cy="20" r="3" />
          </svg>
        </div>
      </div>

      {/* Dashed Lines - Navigation Routes */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg width="100%" height="100%" className="fill-none stroke-lime-400">
          <path
            d="M100 200 Q300 100 500 300"
            strokeDasharray="10,10"
            strokeWidth="2"
          />
          <path
            d="M200 400 Q400 200 700 500"
            strokeDasharray="8,8"
            strokeWidth="1.5"
          />
          <path
            d="M0 300 Q200 150 400 250"
            strokeDasharray="12,8"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* main content */}
      <div className="relative z-10 container mx-auto flex h-screen items-center justify-between px-4">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="mb-8 text-6xl leading-none font-bold text-white md:text-8xl">
            WELCOME TO
            <br />
            <span className="text-lime-400">GAMANTARAY</span>
          </h1>
        </div>
        {/* Right Content */}
        <div className="max-w-xl">
          <button className="flex items-center gap-2 rounded-sm bg-lime-400 px-8 py-4 text-lg font-bold text-slate-900 transition-colors duration-300 hover:bg-lime-300">
            LIHAT KAPAL
            <ArrowUpRightIcon size={32} weight="bold" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 right-20 animate-pulse">
        <div className="h-4 w-4 rounded-full bg-lime-400"></div>
      </div>
      <div className="absolute top-1/3 left-1/4 animate-pulse delay-1000">
        <div className="h-3 w-3 rounded-full bg-lime-400"></div>
      </div>
      <div className="absolute right-1/3 bottom-1/3 animate-pulse delay-500">
        <div className="h-2 w-2 rounded-full bg-lime-400"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/70"></div>
    </section>
  );
};

export default Hero;
