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
    <div className="m-12 p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProjectCarousel />
      <Certificates />
      <Experience />
      <Contact />
    </div>
  );
}