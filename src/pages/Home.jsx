import React from "react";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Timeline from "../sections/Timeline";
import Contact from '../sections/Contact';
import Hero from "../sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}