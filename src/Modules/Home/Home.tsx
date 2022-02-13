import { Carousel } from "./Carousel/Carousel";
import React from "react";
import { AboutMe } from "./AboutMe/AboutMe";
import { Hero } from "./Hero/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Carousel />
    </>
  );
};
