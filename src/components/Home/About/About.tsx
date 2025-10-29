import React from "react";
import Button from "@/components/ui/Button";

const About = () => {
  return (
    <section className="bg-gradient-01">
      <div className="relative font-sofia">
        <h2
          aria-hidden="true"
          className="text-stroke-black pointer-events-none absolute inset-0 top-2 left-0 z-0 text-[90px] leading-[110%] select-none md:top-5 md:text-9xl lg:top-30 lg:leading-[90%] xl:top-16 xl:text-[180px]"
        >
          <span className="block font-extrabold">TENTANG</span>
          <span className="block font-bold">GAMANTARAY</span>
        </h2>
      </div>
      <div className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-16">
            {/* Title Section */}
            <div className="relative w-fit font-sofia">
              <h2 className="relative z-10">
                <span className="h1 block text-lime-100">TENTANG</span>
                <span className="h2 block text-lime-500">GAMANTARAY</span>
              </h2>
            </div>

            {/* Content Section */}
            <div className="space-y-6 md:space-y-8">
              <p className="body-large text-lime-100">
                Gamantaray UGM adalah tim riset maritim dari Universitas Gadjah
                Mada yang berfokus pada pengembangan teknologi kapal seperti RC
                Boat, ROV, dan Solar Boat. Bernaung di bawah DTMI FT UGM, tim
                ini mengusung semangat inovasi dan riset terapan dalam bidang
                teknologi kelautan.
              </p>

              <div className="pt-2">
                <Button
                  shape="angled-right"
                  size="dekstop"
                  className="font-sofia text-2xl font-semibold text-blue-500 md:text-3xl"
                >
                  PELAJARI LEBIH LANJUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
