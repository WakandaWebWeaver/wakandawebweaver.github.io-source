import React from "react";
import FluidText from "../components/FluidText";

export default function Hero() {
    return (
        <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <FluidText text="Esvin Joshua" />
            <p className="text-xl md:text-2xl text-slate-300 mb-8 mt-0 md:mt-4">
              Building innovative web and mobile solutions with modern technologies
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 rounded-md text-white font-medium">
                Question Everything, Learn Anything
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}