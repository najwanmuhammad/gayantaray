import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import LatestArticle from "./LatestArticle/LatestArticle";
import Gallery from "./Gallery/Gallery";
import Sponsor from "./Sponsor/Sponsor";
import Achiev from "./Achiev/Achiev";
import AchievStats from "./Achiev/AchievStats";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <LatestArticle />
      <Gallery />
      <Achiev />
      <AchievStats />
      <Sponsor />
    </main>
  );
};

export default Home;
