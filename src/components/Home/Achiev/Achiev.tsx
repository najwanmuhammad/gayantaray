"use client";

import Image from "next/image";
import ButtonArticle from "../../ui/ButtonArticle";

export default function Achiev() {
  return (
    <section
      className="w-full px-4 py-10 md:px-8 md:py-16"
      style={{ backgroundImage: "var(--background-image-gradient-01)" }}
    >
      <h2 className="h2 mb-6 text-pearl-100 md:mb-8">PENCAPAIAN</h2>

      {/* Layout: mobile stack, desktop 2-col (image left, text right) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
        {/* Image */}
        <div className="relative md:col-span-7">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-pearl-700/30">
            <Image
              src="/images/achiev/hero.jpg" // ganti ke asetmu
              alt="Pencapaian Gamantaray"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 58vw, 100vw"
              priority
            />
          </div>
        </div>

        {/* Copy + CTA */}
        <div className="md:col-span-5">
          <div className="rounded-xl border border-pearl-700/30 bg-blue-500/30 p-5 md:border-0 md:bg-transparent md:p-0">
            <p className="body-medium md:body-large text-pearl-100">
              Lorem ipsum dolor sit amet consectetur. Vel rhoncus nibh egestas
              sed nunc. Faucibus tellus mattis condimentum accumsan ut in augue
              gravida mauris. Sed nibh erat faucibus morbi in egestas congue
              aenean. Varius mattis lacinia luctus risus sem turpis. Arcu
              malesuada id elit et eget ornare nascetur volutpat.
            </p>

            {/* CTA */}
            <div className="mt-6 md:mt-10">
              <ButtonArticle
                onClick={() => (location.href = "/pencapaian")}
                variant="light"
                size="md"
                iconPosition="right"
                className="text-blue-500"
                style={{
                  backgroundColor: "var(--color-lime-500)",
                  clipPath:
                    "polygon(0% 0%, calc(100% - 17px) 0%, 100% 17px, 100% 100%, 0% 100%)",
                }}
              >
                SELENGKAPNYA
              </ButtonArticle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
