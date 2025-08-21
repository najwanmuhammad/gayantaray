import React from "react";
import Button from "@/components/ui/Button";
import ButtonArticle from "@/components/ui/ButtonArticle";

const About = () => {
  return (
    <section className="bg-gradient-01 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Title Section - Mobile First */}
          <div className="order-1 lg:order-1">
            <h2 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block text-white">TENTANG</span>
              <span className="block text-lime-400">GAMANTARAY</span>
            </h2>
          </div>

          {/* Content Section */}
          <div className="order-2 space-y-6 md:space-y-8 lg:order-2">
            <p className="text-base leading-relaxed text-gray-300 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
              Gamantaray UGM adalah tim riset maritim dari Universitas Gadjah
              Mada yang berfokus pada pengembangan teknologi kapal seperti RC
              Boat, ROV, dan Solar Boat. Bernaung di bawah DTMI FT UGM, tim ini
              mengusung semangat inovasi dan riset terapan dalam bidang
              teknologi kelautan.
            </p>

            <div className="pt-2">
              <Button
                shape="angled-right"
                size="md"
                className="font-sofia text-2xl font-semibold md:text-3xl"
              >
                PELAJARI LEBIH LANJUT
              </Button>
              <ButtonArticle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione non, repudiandae minus cum totam, aperiam dolorum in
                corporis doloribus quasi fugit qui veritatis suscipit ab earum
                quia quos et aliquid?
              </ButtonArticle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
