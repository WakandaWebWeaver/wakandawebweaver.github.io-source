import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
        "src/assets/demoImages/prism-1.png",
        "src/assets/demoImages/prism-2.png",
      ],
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
    },
  ];

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (imagesRef.current.length > 0) {
      gsap.fromTo(
        imagesRef.current[currentImageIndex],
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    }
  }, [currentImageIndex]);

  const handleNextImage = () => {
    const nextIndex =
      (currentImageIndex + 1) % activeProject.imagePaths.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + activeProject.imagePaths.length) %
      activeProject.imagePaths.length;
    setCurrentImageIndex(prevIndex);
  };

  const closePopup = () => {
    gsap.to(popupRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.95,
      duration: 1.2, 
      ease: "power2.out",  
      onComplete: () => setActiveProject(null),
    });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.4 });  
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      closePopup();
    }
  };

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-lg shadow-cyan-500/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12 p-4">
            <div className="flex-1 h-px mr-4 bg-gradient-to-r from-cyan-300/40 to-purple-500/40"></div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 p-6 rounded-xl hover:shadow-cyan-500/20 border border-slate-700 cursor-pointer"
                onClick={() => {
                  if (!isMobile) setActiveProject(project);
                }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-slate-900 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeProject && !isMobile && (
        <div
          ref={overlayRef}
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div
            ref={popupRef}
            className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl flex w-[80%] max-w-5xl relative pointer-events-auto min-h-[500px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 w-1/2">
              <h3 className="text-2xl text-white font-bold mb-4">
                {activeProject.title}
              </h3>
              <p className="text-slate-300 mb-4">{activeProject.description}</p>
              <div className="absolute bottom-4 left-4 text-slate-300 m-4">
                {activeProject.date}
              </div>
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-cyan-400 hover:text-cyan-200"
              >
                View on GitHub →
              </a>
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <div className="bg-black/20 w-1/2 p-4 relative">
              {activeProject.imagePaths.length > 0 ? (
                <div className="popup-images-container absolute inset-0 flex items-center justify-center">
                  {activeProject.imagePaths.map((src, index) => (
                    <img
                      key={index}
                      ref={(el) => (imagesRef.current[index] = el)}
                      src={src}
                      alt={`Project demo ${index}`}
                      className={`popup-image ${
                        index === currentImageIndex ? "visible" : "hidden"
                      }`}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-white text-center absolute inset-0 flex items-center justify-center">
                  No images available for this project.
                </p>
              )}

              {activeProject.imagePaths.length > 0 && (
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={handlePrevImage}
                    className="bg-slate-800 text-white rounded-full p-2 hover:bg-slate-700"
                  >
                    ◀
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="bg-slate-800 text-white rounded-full p-2 hover:bg-slate-700"
                  >
                    ▶
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
