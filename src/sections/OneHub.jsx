import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ProjectCarousel() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectRef = useRef(null);
  const carouselRef = useRef(null);

  const projects = [
    {
      id: "onehub",
      title: "Sreyas OneHub",
      subtitle: "Campus Superapp for Students & Faculty",
      description:
        "A full-featured campus platform for students and faculty at Sreyas Institute. Handles attendance, academics, clubs, project building, and communication in one modern mobile-first app.",
      date: "September 2024",
      tags: ["Flutter", "Firebase", "Appwrite", "Cloud Functions", "Firestore", "GCP"],
      link: "https://onehub-ebon.vercel.app",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: [
        "Realtime Attendance System",
        "Marks & Profile Dashboard",
        "AI Chatbot with OCR",
        "Student Role-Based Access",
        "Firebase + Appwrite Integration",
        "Club & Event Management",
        "Mobile-First Flutter App",
        "Admin & Faculty Tools"
      ]
    },
    {
        id: "ember",
        title: "Ember AI",
        subtitle: "Campus Companion AI Assistant",
        description:
          "An AI chatbot trained on college data and FAQ to assist students in finding info, documents, and deadlines. Embedded in OneHub as a Flutter-first widget.",
        date: "November 2024",
        tags: ["LangChain", "OCR", "Gemini Pro", "Firebase", "Pinecone", "Flutter"],
        link: "",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11l3-3v11l-3-3H3z" />
          </svg>
        ),
        features: [
          "Chatbot Trained on College Data",
          "OCR-based Document Scanning",
          "Gemini-Powered Responses",
          "Context-Aware File Replies",
          "RAG via Pinecone",
          "Integrated into OneHub Flutter App",
          "Realtime Chat Storage",
          "Mobile-Friendly Interface"
        ]
    },
    {
      id: "runsphere",
      title: "RunSphere",
      subtitle: "Cloud Code Execution for Students",
      description:
        "Secure code execution engine built for OneHub. Supports multi-language environments, AI code generation, and versioning with Prometheus integration.",
      date: "February 2025",
      tags: ["Docker", "Node.js", "Firebase", "LangChain", "Redis", "CloudCode"],
      link: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "Multi-language Support",
        "Secure Sandboxed Runtime",
        "AI-Generated Starter Code",
        "Firebase Realtime Sync",
        "Custom File System Logic",
        "Command Output Streaming",
        "Flutter + Web Integration",
        "Version Tracking Hooks"
      ]
    },
    {
      id: "prometheus",
      title: "Prometheus",
      subtitle: "Version Control for Students, by Students",
      description:
        "A custom VCS system designed for educational workflows. Enables students to save, track, and evolve their code versions without needing Git knowledge.",
      date: "April 2025",
      tags: ["Flutter", "Firebase", "Firestore", "Appwrite", "Cloud Functions"],
      link: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      ),
      features: [
        "Commit & Version Save System",
        "Visual History Management",
        "Diff Logic & File Comparison",
        "Firebase-Based Storage",
        "Flutter UI Integration",
        "Auto-Save & Recovery System",
        "Hooked to RunSphere",
        "Student-Friendly UX"
      ]
    }
  ];
  
  const currentProject = projects[currentProjectIndex];

  const goToNextProject = () => {
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToPrevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (projectRef.current) {
      gsap.to(projectRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(projectRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
          });
        }
      });
    }
  }, [currentProjectIndex]);

  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    }
  }, []);

  return (
    <section className="relative py-16" id="featured-projects">
      <div 
        ref={carouselRef}
        className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-slate-700/50 rounded-xl shadow-xl shadow-cyan-500/5"
      >
        <div className="container mx-auto">
          <div className="flex items-center mb-8 p-2">
            <div className="flex-1 h-px mr-4 bg-gradient-to-r from-cyan-300/40 to-purple-500/40"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
              Featured Projects
            </h2>
            <div className="flex-1 h-px ml-4 bg-gradient-to-l from-cyan-300/40 to-purple-500/40"></div>
          </div>

          <div 
            ref={projectRef}
            className="bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-xl border border-slate-700/30 shadow-lg p-5"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 mr-3 border border-indigo-500/30">
                {currentProject.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {currentProject.title}
                </h3>
                <p className="text-indigo-400">{currentProject.subtitle}</p>
              </div>
            </div>

            <div className="mb-5">
              <p className="text-slate-300">{currentProject.description}</p>
            </div>

            <div className="mb-5">
              <h4 className="text-white font-semibold mb-2">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {currentProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {currentProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-full text-xs bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">{currentProject.date}</span>
              </div>
              
                {currentProject.link && (
                    <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg transition-all duration-200 text-sm shadow-lg shadow-indigo-500/30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Project
                  </a>
                )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button 
              onClick={goToPrevProject}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center space-x-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProjectIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentProjectIndex 
                      ? "bg-cyan-500 w-6" 
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={goToNextProject}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}