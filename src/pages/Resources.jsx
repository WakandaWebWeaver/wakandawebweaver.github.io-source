import React from "react";

export default function Resources() {
  return (
    <section className="relative z-10 min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="bg-gradient-to-r from-cyan-300 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Resources
          </span>
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Learning Materials</h3>
            <p className="text-slate-300">
              This section will contain helpful resources, tutorials, and tools I recommend.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Downloadable Content</h3>
            <p className="text-slate-300">
              Templates, code snippets, and other resources will be available here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}