import React from "react";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from '../sections/Contact';
import Hero from "../sections/Hero";
import Certificates from "../sections/Certificates";
import ProjectCarousel from "../sections/OneHub";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProjectCarousel />
      <Certificates />
      <Experience />
      <Contact />
    </>
  );
}