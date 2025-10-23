import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import LatestArticle from "./LatestArticle/LatestArticle";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <LatestArticle />
    </main>
  );
};

export default Home;
