import React from "react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent">
            WakandaWebWeaver
          </div>
        </div>
      </nav>
    );
}