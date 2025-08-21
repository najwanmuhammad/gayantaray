import { NavLinks } from "@/constant/constant";
import { X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div
      className={`${navOpen} fixed top-0 right-0 z-[10000] h-screen w-full transform bg-[#031417] transition-all delay-300 duration-300`}
    >
      {/* header */}
      <div className="flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
        {/* logo */}
        <div className="top top-6 left-6">
          <Image
            src="/white-logo-3.svg"
            alt="Gamantaray Logo"
            width={134}
            height={42}
          />
        </div>
        {/* close burger */}
        <X
          size={32}
          weight="bold"
          onClick={closeNav}
          className="top top-6 right-6 h-8 w-8 cursor-pointer text-lime-500 sm:h-10 sm:w-10"
        />
      </div>

      <div className="flex flex-col items-end space-y-8 px-8 md:px-11">
        {/* Navigation Items */}
        <div className="mt-10 mb-16 flex flex-col items-end space-y-8">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="font-sofia text-3xl leading-[1.1] font-semibold text-lime-100 transition-all duration-200 hover:text-lime-400"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* Contact Button */}
        <button className="clip-contact-2 bg-lime-500 px-6 py-1 font-sofia text-2xl font-semibold text-blue-500 transition-all duration-300 hover:bg-lime-700 cursor-pointer">
          Kontak Kami
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
