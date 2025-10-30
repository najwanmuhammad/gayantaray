"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-blue-500 pt-20">
      {/* background pattern dot */}
      {/* <div className="absolute inset-0 z-10">
        <Image src="/vectors/dot.svg" alt="dot" fill className="object-cover" />
      </div> */}

      {/* shape pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1 left-0 hidden md:block">
          <Image
            src="vectors/dash-line.svg"
            alt="vector"
            width={550}
            height={550}
          />
        </div>
        <div className="absolute right-60 bottom-28">
          <Image src="vectors/line.svg" alt="vector" width={600} height={0} />
        </div>
        <div className="absolute top-50 right-55">
          <Image
            src="/vectors/rectangle.png"
            alt="vector"
            width={220}
            height={220}
          />
        </div>
        <div className="absolute right-160 bottom-25">
          <Image
            src="/vectors/circle.png"
            alt="vector"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute -top-1 right-30 h-[100px] w-[200px]">
          <Image
            src="/vectors/circle2.svg"
            alt="vector"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute -top-15 right-0 h-[200px] w-[200px]">
          <Image
            src="/vectors/circle3.svg"
            alt="vector"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute right-0 bottom-22 h-[406px] w-[140px]">
          <Image
            src="/vectors/arrow.svg"
            alt="vector"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Ship Illustrations */}
      <div className="absolute inset-0">
        {/* Gamanave */}
        <div className="absolute top-0 left-0 hidden md:block">
          <Image
            src="images/ships/vector-gamanave.svg"
            alt="vector-gamanave"
            width={650}
            height={0}
          />
        </div>
        {/* Safinah One */}
        <div className="flex items-center justify-center md:hidden lg:flex">
          <Image
            src="images/ships/vector-safinah-one.svg"
            alt="vector-safinah-one"
            width={1100}
            height={0}
          />
        </div>
        {/* Jayamahe */}
        <div className="absolute right-0 bottom-0">
          <Image
            src="images/ships/vector-jayamahe.svg"
            alt="vector-jayamahe"
            width={650}
            height={0}
          />
        </div>
      </div>

      {/* main content */}
      <div className="relative z-10 mx-auto flex h-screen items-center justify-between px-4">
        {/* Left Content */}
        <div className="mx-20 mt-25 max-w-2xl">
          <h1 className="mb-8 font-sofia text-6xl leading-[1.1] font-extrabold text-lime-100 md:text-8xl">
            WELCOME TO
            <span className="text-lime-400 block">GAMANTARAY</span>
          </h1>
        </div>
        {/* Right Content */}
        <div className="mx-16 mt-50 flex max-w-xl flex-row">
          <div className="flex items-end px-1 pb-2.5 transition-colors duration-300">
            <h1 className="font-sofia text-3xl leading-[1.1] font-semibold text-white md:text-4xl">
              LIHAT KAPAL
            </h1>
          </div>
          <ArrowUpRightIcon size={72} weight="bold" className="text-lime-100" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
