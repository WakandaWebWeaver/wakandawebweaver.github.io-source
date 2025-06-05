import React, { useEffect, useState } from "react";

export default function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const patternStyle = {
    '--s': '800px',
    '--c1': '#8b5cf6',
    '--c2': '#1e1b4b',
    '--_g': 'var(--c2) 4% 14%, var(--c1) 14% 24%, var(--c2) 22% 34%, var(--c1) 34% 44%, var(--c2) 44% 56%, var(--c1) 56% 66%, var(--c2) 66% 76%, var(--c1) 76% 86%, var(--c2) 86% 96%',
    background: `
      radial-gradient(
        100% 100% at 100% 0,
        var(--c1) 4%,
        var(--_g),
        #000a 96%,
        #0000
      ),
      radial-gradient(
        100% 100% at 0 100%,
        #0000,
        #000a 4%,
        var(--_g),
        var(--c1) 96%
      ) var(--c1)
    `,
    backgroundSize: 'var(--s) var(--s)',
    backgroundPosition: `${(mousePos.x - 50) * 0.5}px ${(mousePos.y - 50) * 0.3}px, ${(mousePos.x - 50) * -0.3}px ${(mousePos.y - 50) * 0.4}px`,
    transition: 'background-position 0.3s ease-out'
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="w-full h-full blur-sm"
        style={patternStyle}
      />
    </div>
  );
}