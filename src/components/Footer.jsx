import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PortfolioFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <footer className="py-10 bg-slate-900/70 border-t border-slate-700"
      ref={footerRef}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-5 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-white mb-1">That's it folks!</h2>
            <p className="text-slate-400 text-sm">
              Thank you for visiting my portfolio. I hope you found it informative and inspiring.
              <br />
              Feel free to reach out if you have any questions or would like to collaborate.
            </p>
            <hr className="my-4 border-slate-700" />
            <p className="text-slate-500 text-xs">
              Wavy background pattern by <a href="https://uiverse.io/profile/csemszepp" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">Csem Szep</a> on <a href="https://uiverse.io/" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">Uiverse</a>.
            </p>
          </div>
          <div className="flex space-x-3">
            <a href="https://github.com/wakandawebweaver" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors duration-200 border border-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.946-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.122-.3-.536-1.523.117-3.175 0 0 1.005-.315 3.3 1.23.961-.27 1.984-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.645 1.665.24 2.88.12 3.175.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/esvin-joshua" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors duration-200 border border-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-slate-500 text-xs mb-3 md:mb-0">© {new Date().getFullYear()} Esvin Joshua. All rights reserved(?)</p>
        </div>
      </div>
    </footer>
  );
}