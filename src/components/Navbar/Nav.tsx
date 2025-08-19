"use client";

import { NavLinks } from "@/constant/constant";
import { List } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-teal-800 shadow-xl" : "fixed"
      } fixed z-[1000] h-[12vh] w-full duration-200`}
    >
      <div className="mx-auto flex h-full w-[92%] items-center justify-between bg-transparent">
        <div className="mx-2 flex items-center lg:mx-0">
          {/* Logo */}
          <Image
            src="/white-logo-3.svg"
            alt="Gamantaray Logo"
            width={100}
            height={32}
          />
        </div>
        {/* NavLinks */}
        <div className="clip-navbar hidden items-center space-x-10 bg-[#EAF63F26] px-6 py-2 lg:flex">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="font-sofia leading-[1.1] font-semibold text-lime-100 transition-all duration-200 hover:text-lime-400 lg:text-xl xl:text-2xl"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* Button */}
        <div className="flex items-center">
          {/* kontak button */}
          <button className="clip-contact-1 hidden cursor-pointer bg-lime-500 px-6 py-2 font-sofia text-2xl leading-[1.1] font-semibold text-blue-500 transition-all duration-300 hover:bg-lime-700 lg:block">
            Kontak Kami
          </button>
          {/* burger menu */}
          <List
            size={32}
            onClick={openNav}
            className="mx-2 h-8 w-8 cursor-pointer text-white md:h-10 md:w-10 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
