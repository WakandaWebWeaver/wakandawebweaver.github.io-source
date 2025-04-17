import React from "react";

export default function Blog() {
  return (
    <section className="relative z-10 min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="bg-gradient-to-r from-cyan-300 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Coming Soon</h3>
            <p className="text-slate-300">
              My blog posts will appear here. Stay tuned for insights about web development,
              machine learning, and Web3 technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}