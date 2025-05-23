import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeImage, setActiveImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    
    const x = ((clientX - left) / width) * 2 - 1;
    const y = ((clientY - top) / height) * 2 - 1;
    
    setMousePosition({ x, y });
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative z-10 py-20" 
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-lg shadow-cyan-500/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12 p-4">
            <div className="flex-1 h-px mr-4 bg-gradient-to-r from-cyan-300/40 to-purple-500/40"></div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
              About Me
            </h2>
            <div className="flex-1 h-px ml-4 bg-gradient-to-r from-purple-500/40 to-cyan-300/40"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/3 relative h-80 md:h-auto">
              <div className="relative aspect-square w-full h-full">
                <motion.div 
                  className={`absolute w-4/5 h-4/5 bottom-0 left-0 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-in-out ${activeImage === "musician" ? "z-30 scale-110" : "z-10"}`}
                  initial={{ opacity: 0, x: -48 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.7, delay: 0.2 }
                    }
                  }}
                  style={{
                    transform: activeImage === "musician" ? "scale(1.1)" : `translateX(${mousePosition.x * -10}px) translateY(${mousePosition.y * 5}px)`,
                  }}
                  onClick={() => setActiveImage(activeImage === "musician" ? null : "musician")}
                  whileHover={{ scale: activeImage ? 1 : 1.05 }}
                >
                  <img 
                    src="assets/images/musician.jpg" 
                    alt="Developer portrait left" 
                    className="w-full h-full object-cover mix-blend-overlay transition-all duration-300" 
                  />
                  
                </motion.div>
                
                <motion.div 
                  className={`absolute w-4/5 h-4/5 top-0 right-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-in-out ${activeImage === "profile_main" ? "z-30 scale-110" : "z-10"}`}
                  initial={{ opacity: 0, x: 48 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.7, delay: 0.4 }
                    }
                  }}
                  style={{
                    transform: activeImage === "profile_main" ? "scale(1.1)" : `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * -5}px)`,
                  }}
                  onClick={() => setActiveImage(activeImage === "profile_main" ? null : "profile_main")}
                  whileHover={{ scale: activeImage ? 1 : 1.05 }}
                >
                  <img 
                    src="assets/images/profile_main.jpg" 
                    alt="Developer portrait right" 
                    className="w-full h-full object-cover mix-blend-overlay transition-all duration-300" 
                  />
                </motion.div>
                
                <motion.div 
                  className={`absolute w-4/5 h-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-cyan-500/40 to-purple-500/40 overflow-hidden shadow-xl cursor-pointer transition-all duration-300 ease-in-out ${activeImage === "profile" ? "z-30 scale-110" : "z-20"}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.7, delay: 0.6 }
                    }
                  }}
                  style={{
                    transform: activeImage === "profile" ? "scale(1.1) translate(-50%, -50%)" : `translate(calc(-50% + ${mousePosition.x * 5}px), calc(-50% + ${mousePosition.y * 5}px))`,
                  }}
                  onClick={() => setActiveImage(activeImage === "profile" ? null : "profile")}
                  whileHover={{ scale: activeImage ? 1 : 1.05 }}
                >
                  <img 
                    src="assets/images/profile.jpg" 
                    alt="Developer portrait main" 
                    className="w-full h-full object-cover mix-blend-overlay transition-all duration-300" 
                  />
                </motion.div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-slate-300 mb-6">
                I'm a passionate full-stack developer with a focus on creating modern web and mobile applications.
                With expertise in both frontend and backend technologies, I build responsive, user-friendly
                interfaces coupled with robust server-side solutions.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Currently, I'm focused on developing AI-powered tools to enhance my projects and improve user experience.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-700/50">
                  <span className="text-cyan-300">Location:</span> Hyderabad, India
                </div>
                <div className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-700/50">
                  <span className="text-cyan-300">Experience:</span> 3 Years and Counting
                </div>
                <div className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-700/50">
                  <span className="text-cyan-300">Focus:</span> App Development, AI, Web3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}