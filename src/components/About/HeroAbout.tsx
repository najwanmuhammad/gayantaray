import Image from "next/image";

export function HeroAbout() {
  return (
    <section>
      <div className="relative h-screen w-full bg-slate-950">
        {/* Background Image */}
        <Image
          src="/images/team/team-photo.jpg"
          alt="Gamanave"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Title */}
        <div className="relative top-[70%] flex px-4 md:top-[75%] md:px-16">
          <h1 className="h1 text-lime-100">TENTANG KAMI</h1>
        </div>
      </div>

      {/* Description */}
      <div className="min-h-3/4 bg-blue-500 px-4 py-8 md:h-[90%] md:px-16">
        <p className="bbody-large text-lime-100 md:py-12">
          Lorem ipsum dolor sit amet consectetur. Vel rhoncus nibh egestas sed
          nunc. Faucibus tellus mattis condimentum accumsan ut in augue gravida
          mauris. Sed nibh erat faucibus morbi in egestas congue aenean. Varius
          mattis lacinia luctus risus sem turpis. Arcu malesuada id elit et eget
          ornare nascetur volutpat. Lorem ipsum dolor sit amet consectetur. Vel
          rhoncus nibh egestas sed nunc. Faucibus tellus mattis condimentum
          accumsan ut in augue gravida mauris. Sed nibh erat faucibus morbi in
          egestas congue aenean. Varius mattis lacinia luctus risus sem turpis.
          Arcu malesuada id elit et eget ornare nascetur volutpat.
        </p>
      </div>
    </section>
  );
}
