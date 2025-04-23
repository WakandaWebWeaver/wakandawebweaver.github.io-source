import React from "react";
import FluidText from "../components/FluidText";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-lg shadow-cyan-500/10">
        <FluidText text="Esvin Joshua" />
          <p className="text-xl md:text-2xl text-slate-300 mb-8 mt-0 md:mt-4">
            Building innovative web and mobile solutions with modern technologies
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 rounded-md text-white font-medium shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Question Everything, Learn Anything
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}