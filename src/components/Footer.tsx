"use client";

import React from "react";
import Image from "next/image";
import {
  MapPinIcon,
  WhatsappLogoIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 py-8 font-redhat text-pearl-500 md:py-12">
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="block space-y-6 md:hidden">
          {/* Logo */}
          <div className="flex justify-start">
            <Image
              src="/white-logo-3.svg"
              alt="logo gaman"
              width={134}
              height={42}
            />
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <MapPinIcon
              size={20}
              weight="fill"
              className="mt-1 flex-shrink-0 text-pearl-500"
            />
            <div className="leading-relaxed text-pearl-500">
              <p>Departemen Teknik Mesin dan Teknik Industri</p>
              <p>Fakultas Teknik UGM</p>
              <p>Jl. Grafika No. 2, Bulaksumur, Yogyakarta</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <WhatsappLogoIcon
              size={20}
              weight="fill"
              className="text-pearl-500"
            />
            <a
              href="tel:+6281218290149"
              className="text-pearl-500 transition-colors duration-200 hover:text-pearl-600"
            >
              +62 812-1829-0149
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <EnvelopeSimpleIcon
              size={20}
              weight="bold"
              className="text-pearl-500"
            />
            <a
              href="mailto:gamantaray@ugm.ac.id"
              className="text-pearl-500 transition-colors duration-200 hover:text-pearl-600"
            >
              gamantaray@ugm.ac.id
            </a>
          </div>

          {/* Social Media */}
          <div className="mt-10 flex justify-center space-x-4">
            <a href="#" className="social-media-mobile" aria-label="Facebook">
              <FacebookLogoIcon
                size={18}
                weight="fill"
                className="text-blue-500"
              />
            </a>
            <a href="#" className="social-media-mobile" aria-label="Instagram">
              <InstagramLogoIcon
                size={18}
                weight="fill"
                className="text-blue-500"
              />
            </a>
            <a href="#" className="social-media-mobile" aria-label="TikTok">
              <TiktokLogoIcon
                size={18}
                weight="fill"
                className="text-blue-500"
              />
            </a>
            <a href="#" className="social-media-mobile" aria-label="LinkedIn">
              <LinkedinLogoIcon
                size={18}
                weight="fill"
                className="text-blue-500"
              />
            </a>
            <a href="#" className="social-media-mobile" aria-label="Line">
              <Image
                src="/vectors/line-app.svg"
                alt="line logo"
                width={18}
                height={18}
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-sm text-pearl-500">
              GAMANTARAY {currentYear}. All Right Reserved
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 items-center gap-8 text-base lg:grid-cols-12 xl:text-lg">
            {/* Logo Section */}
            <div className="lg:col-span-3">
              <Image
                src="/white-logo-3.svg"
                alt="logo gaman"
                width={134}
                height={42}
              />
            </div>

            {/* Contact Info Section */}
            <div className="space-y-4 lg:col-span-6">
              {/* Address */}
              <div className="flex items-start justify-center space-x-3">
                <MapPinIcon
                  size={24}
                  weight="fill"
                  className="mt-1 flex-shrink-0 text-pearl-500"
                />
                <div className="leading-relaxed text-pearl-500">
                  <p>Departemen Teknik Mesin dan Teknik Industri</p>
                  <p>Fakultas Teknik UGM</p>
                  <p>Jl. Grafika No. 2, Bulaksumur, Yogyakarta</p>
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="space-y-4 lg:col-span-3">
              {/* Phone */}
              <div className="flex items-center justify-center space-x-2 xl:justify-end">
                <WhatsappLogoIcon
                  size={24}
                  weight="fill"
                  className="text-pearl-500"
                />
                <a
                  href="tel:+6281218290149"
                  className="mr-8 text-pearl-500 transition-colors duration-200 hover:text-pearl-600"
                >
                  +62 812-1829-0149
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center space-x-3 xl:justify-end">
                <EnvelopeSimpleIcon
                  weight="bold"
                  size={24}
                  className="text-pearl-500"
                />
                <a
                  href="mailto:gamantaray@ugm.ac.id"
                  className="text-pearl-500 transition-colors duration-200 hover:text-pearl-600"
                >
                  gamantaray@ugm.ac.id
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 flex flex-col items-center justify-between space-y-6 pt-8 lg:space-y-10">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="social-media-desktop"
                aria-label="Facebook"
              >
                <FacebookLogoIcon
                  size={24}
                  weight="fill"
                  className="text-blue-500"
                />
              </a>
              <a
                href="#"
                className="social-media-desktop"
                aria-label="Instagram"
              >
                <InstagramLogoIcon
                  size={24}
                  weight="fill"
                  className="text-blue-500"
                />
              </a>
              <a href="#" className="social-media-desktop" aria-label="TikTok">
                <TiktokLogoIcon
                  size={24}
                  weight="fill"
                  className="text-blue-500"
                />
              </a>
              <a
                href="#"
                className="social-media-desktop"
                aria-label="LinkedIn"
              >
                <LinkedinLogoIcon
                  size={24}
                  weight="fill"
                  className="text-blue-500"
                />
              </a>
              <a href="#" className="social-media-desktop" aria-label="Line">
                <Image
                  src="/vectors/line-app.svg"
                  alt="line logo"
                  width={24}
                  height={24}
                />
              </a>
            </div>

            {/* Copyright */}
            <div>
              <p className="text-base text-pearl-500 xl:text-lg">
                GAMANTARAY {currentYear}. All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
