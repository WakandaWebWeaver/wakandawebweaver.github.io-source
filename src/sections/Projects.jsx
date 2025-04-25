import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const projectsRef = useRef(null);
  const projectCardRefs = useRef([]);
  const imagesRef = useRef([]);
  const overlayRef = useRef(null);
  const popupRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Prometheus - lightweight version control system",
      description:
        "A custom version control system for files and folders, implementing repositories, branches and commits. Built with Python, Hosted on Appwrite and Firebase.",
      date: "April 2025",
      category: "web",
      tags: ["Python", "Appwrite", "Firebase"],
      github: "",
      imagePaths: [],
      bgColor: "from-blue-500/20 to-cyan-500/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "PRism - AI powered Contribution Helper",
      description:
        "A web application that helps developers find open source projects to contribute to, using AI to match skills and interests.",
      date: "April 2025",
      category: "web",
      tags: ["React", "Flask", "Python", "AI"],
      github: "https://github.com/wakandawebweaver/PRism",
      imagePaths: [
        "assets/demoImages/prism-1.png",
        "assets/demoImages/prism-2.png",
      ],
      bgColor: "from-purple-500/20 to-pink-500/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "VChat - Flutter Chat App",
      description:
        "A chat application built with Flutter & Firebase, featuring message sharing, image sharing, and post creation.",
      date: "August 2024",
      category: "mobile",
      tags: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/wakandawebweaver/vchat",
      imagePaths: [],
      bgColor: "from-green-500/20 to-emerald-500/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Nudity Detection",
      description:
        "An ML model/program to detect nudity in images using TensorFlow, Keras & OpenCV.",
      date: "July 2024",
      category: "ml",
      tags: ["TensorFlow", "Keras", "OpenCV", "Python"],
      github: "https://github.com/wakandawebweaver/nudity_detection",
      imagePaths: [],
      bgColor: "from-yellow-500/20 to-amber-500/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "HiveMind",
      description:
        "A social media platform for students. Built with AWS, MongoDB & Flask.",
      date: "May 2024",
      category: "web",
      tags: ["AWS", "MongoDB", "Flask", "Python"],
      github: "https://github.com/wakandawebweaver/HiveMind",
      imagePaths: [],
      bgColor: "from-red-500/20 to-rose-500/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Organisation Management Tool",
      description:
        "A platform for tracking users, donations and events, built with Flask & MongoDB.",
      date: "December 2023",
      category: "web",
      tags: ["Flask", "MongoDB", "Python", "JavaScript"],
      github: "https://github.com/wakandawebweaver/Organisation-Management-Tool",
      imagePaths: [],
      bgColor: "from-cyan-500/20 to-sky-500/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    if (projectCardRefs.current.length > 0) {
      gsap.fromTo(
        projectCardRefs.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          stagger: 0.08, 
          duration: 0.6, 
          ease: "power2.out",
          delay: 0.5
        }
      );
    }
  }, []);

  useEffect(() => {
    if (imagesRef.current.length > 0 && activeProject?.imagePaths.length > 0) {
      setIsImageLoading(true);
      
      gsap.fromTo(
        imagesRef.current[currentImageIndex],
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.7,
          ease: "power2.out",
          onComplete: () => setIsImageLoading(false)
        }
      );
    }
  }, [currentImageIndex, activeProject]);

  const openProject = (project) => {
    if (isMobile) return;
    
    setActiveProject(project);
    setCurrentImageIndex(0);

    if (overlayRef.current && popupRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.2)" }
      );
    }
  };

  const handleNextImage = () => {
    if (!activeProject?.imagePaths.length) return;
    
    const nextIndex = (currentImageIndex + 1) % activeProject.imagePaths.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    if (!activeProject?.imagePaths.length) return;
    
    const prevIndex = (currentImageIndex - 1 + activeProject.imagePaths.length) % activeProject.imagePaths.length;
    setCurrentImageIndex(prevIndex);
  };

  const closePopup = () => {
    gsap.to(popupRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => setActiveProject(null),
    });
    
    gsap.to(overlayRef.current, { 
      opacity: 0, 
      duration: 0.3 
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      closePopup();
    }
  };

  return (
    <section className="relative py-24" id="projects">
      <div 
        ref={projectsRef}
        className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-xl shadow-cyan-500/5"
      >
        <div className="container mx-auto px-4">
        <div className="flex items-center mb-12 p-4">
            <div className="flex-1 h-px mr-4 bg-gradient-to-r from-cyan-300/40 to-purple-500/40"></div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectCardRefs.current[index] = el)}
                className={`bg-gradient-to-br p-6 rounded-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group ${isMobile ? "touch-auto" : ""}`}
                onClick={() => openProject(project)}
              >
                <div className="bg-slate-900/60 backdrop-blur-sm p-5 rounded-lg h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-white mr-3">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 flex-1">
                      {project.title.split(" - ")[0]}
                    </h3>
                  </div>
                  
                  {project.title.split(" - ")[1] && (
                    <p className="text-cyan-400 text-sm mb-3">
                      {project.title.split(" - ")[1]}
                    </p>
                  )}
                  
                  <p className="text-slate-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-wrap gap-2 max-w-[75%]">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs bg-slate-800/80 text-slate-200 border border-slate-700/80"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 rounded-full text-xs bg-slate-800/80 text-slate-200 border border-slate-700/80">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <span className="text-xs text-slate-400 whitespace-nowrap">
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeProject && !isMobile && (
        <div
          ref={overlayRef}
          className="fixed inset-0 backdrop-blur-md bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div
            ref={popupRef}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full max-w-5xl relative pointer-events-auto border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 w-full md:w-1/2 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-white mr-4 border border-slate-700">
                  {activeProject.icon}
                </div>
                <h3 className="text-2xl text-white font-bold">
                  {activeProject.title.split(" - ")[0]}
                </h3>
              </div>
              
              {activeProject.title.split(" - ")[1] && (
                <p className="text-cyan-400 text-lg mb-4">
                  {activeProject.title.split(" - ")[1]}
                </p>
              )}
              
              <p className="text-slate-300 mb-6">{activeProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center text-slate-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {activeProject.date}
                </div>
                
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200 border border-slate-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.946-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.122-.3-.536-1.523.117-3.175 0 0 1.005-.315 3.3 1.23.961-.27 1.984-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.645 1.665.24 2.88.12 3.175.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="bg-slate-950/50 w-full md:w-1/2 p-8 relative flex items-center justify-center min-h-[400px]">
              {activeProject.imagePaths.length > 0 ? (
                <div className="w-full h-full relative">
                  {activeProject.imagePaths.map((src, index) => (
                    <div 
                      key={index}
                      ref={(el) => (imagesRef.current[index] = el)}
                      className={`absolute inset-0 flex items-center justify-center ${index === currentImageIndex ? "block" : "hidden"}`}
                    >
                      <img
                        src={src}
                        alt={`${activeProject.title} demo ${index + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg border border-slate-700/50 shadow-lg"
                      />
                    </div>
                  ))}
                  
                  {isImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm rounded-lg">
                      <div className="w-10 h-10 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {activeProject.imagePaths.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-800/70 hover:bg-slate-700 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-colors duration-200 border border-slate-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-800/70 hover:bg-slate-700 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-colors duration-200 border border-slate-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                  
                  {activeProject.imagePaths.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-600/50 text-white text-sm">
                      {currentImageIndex + 1} / {activeProject.imagePaths.length}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full text-slate-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <p className="text-slate-400 text-lg">No images available for this project</p>
                  <p className="text-slate-500 mt-2 max-w-xs mx-auto">Check out the GitHub repository for more details about this project</p>
                </div>
              )}
            </div>

            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700/80 transition-colors duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}