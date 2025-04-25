import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Skills() {
  const [activeSkillTab, setActiveSkillTab] = useState('languages');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);
  const tabsRef = useRef(null);
  const skillCardRefs = useRef([]);
  const overlayRef = useRef(null);
  const popupRef = useRef(null);
  
  const skills = {
    languages: ["Python", "JavaScript", "Swift", "C", "Java", "Dart", "HTML", "CSS", "SQL"],
    frameworks: ["React", "Django", "Flask", "Flutter", "Express.js", "Bootstrap", "Tailwind CSS"],
    tools: ["Git", "MongoDB", "Firebase", "AWS", "Google Cloud", "Heroku", "Docker", "PyCharm", "VS Code"]
  };

  const skillDetails = {
    Python: { xp: 95, mastery: "A", desc: "Master of scripting, ML, and fast prototyping." },
    JavaScript: { xp: 90, mastery: "B", desc: "The language of the web and cursed debugging." },
    Swift: { xp: 75, mastery: "C+", desc: "iOS dev." },
    C: { xp: 65, mastery: "C", desc: "Low-level grind. Pointers and pain." },
    Java: { xp: 70, mastery: "B", desc: "Verbose but dependable. Android pal." },
    Dart: { xp: 80, mastery: "A", desc: "Flutter's sidekick. Cross-platform swag." },
    HTML: { xp: 99, mastery: "S", desc: "The backbone of every site." },
    CSS: { xp: 85, mastery: "A", desc: "Make it pretty or die trying." },
    SQL: { xp: 75, mastery: "A", desc: "Database whisperer." },
    React: { xp: 88, mastery: "A+", desc: "UI savant. Reusable component god." },
    Django: { xp: 77, mastery: "C+", desc: "Python's fullstack wizard." },
    Flask: { xp: 83, mastery: "A+", desc: "Quick n' simple APIs." },
    Flutter: { xp: 80, mastery: "S", desc: "Cross-platform magic." },
    "Express.js": { xp: 70, mastery: "B", desc: "Minimalist Node API beast." },
    Bootstrap: { xp: 60, mastery: "A", desc: "Utility king of quick UIs." },
    "Tailwind CSS": { xp: 90, mastery: "A", desc: "Classy utility CSS, no bloat." },
    Git: { xp: 85, mastery: "A", desc: "Source control kung fu." },
    MongoDB: { xp: 78, mastery: "B+", desc: "NoSQL for chaotic good." },
    Firebase: { xp: 88, mastery: "S", desc: "Real-time, auth, deploy. One-man army." },
    AWS: { xp: 70, mastery: "A", desc: "Cloud power but confusing af." },
    "Google Cloud": { xp: 68, mastery: "A+", desc: "Similar to AWS, still decent." },
    Heroku: { xp: 60, mastery: "B", desc: "Quick deploy, dev-friendly." },
    Docker: { xp: 65, mastery: "C+", desc: "Container overlord." },
    PyCharm: { xp: 75, mastery: "A", desc: "The Python dev dojo." },
    "VS Code": { xp: 95, mastery: "A", desc: "Editor of the gods." }
  };

  const getMasteryColor = (mastery) => {
    switch(mastery) {
      case 'S': return 'text-purple-400';
      case 'A+': return 'text-cyan-400';
      case 'A': return 'text-blue-400';
      case 'B+': return 'text-green-400';
      case 'B': return 'text-emerald-400';
      case 'C+': return 'text-yellow-400';
      case 'C': return 'text-orange-400';
      default: return 'text-slate-400';
    }
  };

  const getMasteryGradient = (mastery) => {
    switch(mastery) {
      case 'S': return 'from-purple-500 to-pink-500';
      case 'A+': return 'from-cyan-500 to-blue-500';
      case 'A': return 'from-blue-500 to-indigo-500';
      case 'B+': return 'from-green-500 to-emerald-500';
      case 'B': return 'from-emerald-500 to-teal-500';
      case 'C+': return 'from-yellow-500 to-amber-500';
      case 'C': return 'from-orange-500 to-red-500';
      default: return 'from-slate-500 to-gray-500';
    }
  };

  function calculateXpBarWidth(xp) {
    return `${xp}%`;
  }

  useEffect(() => {
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    if (tabsRef.current) {
      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (skillCardRefs.current.length > 0) {
      gsap.fromTo(
        skillCardRefs.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          stagger: 0.05, 
          duration: 0.5, 
          ease: "power2.out",
        }
      );
    }
  }, [activeSkillTab]);

  useEffect(() => {
    if (selectedSkill && overlayRef.current && popupRef.current) {
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
  }, [selectedSkill]);

  const openSkillDetail = (skill) => {
    setSelectedSkill(skill);
  };

  const closePopup = () => {
    gsap.to(popupRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => setSelectedSkill(null),
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
    <section className="relative py-24" id="skills">
      <div 
        ref={skillsRef}
        className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-xl shadow-cyan-500/5"
      >
        <div className="container mx-auto px-4">
        <div className="flex items-center mb-12 p-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
              Skills
            </h2>
            <div className="flex-1 h-px ml-4 bg-gradient-to-r from-cyan-300/40 to-purple-500/40"></div>
          </div>

          <div ref={tabsRef} className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              {Object.keys(skills).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSkillTab(tab)}
                  className={`py-2.5 px-6 rounded-lg font-medium transition-all duration-300 ${
                    activeSkillTab === tab
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills[activeSkillTab].map((skill, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (skillCardRefs.current[index] = el)}
                  className={`bg-gradient-to-br p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
                  onClick={() => openSkillDetail(skill)}
                >
                  <div className="bg-slate-900/60 backdrop-blur-sm p-5 rounded-lg h-full flex flex-col items-center">
                    <div className="h-14 w-14 mb-4 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                        {skill.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-medium text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 text-center">
                      {skill}
                    </h3>
                    
                    {skillDetails[skill] && (
                      <div className="mt-auto">
                        <div className="flex items-center justify-center mb-2">
                          <span className={`text-sm font-semibold ${getMasteryColor(skillDetails[skill].mastery)}`}>
                            {skillDetails[skill].mastery}
                          </span>
                          <span className="text-xs text-slate-400 ml-2">Mastery</span>
                        </div>
                        <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${getMasteryGradient(skillDetails[skill].mastery)}`}
                            style={{ width: calculateXpBarWidth(skillDetails[skill].xp) }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedSkill && (
        <div
          ref={overlayRef}
          className="fixed inset-0 backdrop-blur-md bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div
            ref={popupRef}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col w-full max-w-md relative pointer-events-auto border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-700/50 bg-slate-900/80">
              <h3 className="text-2xl text-white font-bold mb-2 flex items-center">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mr-3 border border-blue-500/30">
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                    {selectedSkill.charAt(0).toUpperCase()}
                  </span>
                </span>
                {selectedSkill}
              </h3>
              <p className="text-slate-300">{skillDetails[selectedSkill]?.desc || "No description available."}</p>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-white font-medium">Experience</span>
                  </div>
                  <span className="text-white font-bold">
                    {skillDetails[selectedSkill]?.xp || 0}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5"
                    style={{ width: calculateXpBarWidth(skillDetails[selectedSkill]?.xp || 0) }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-white font-medium">Mastery Level</span>
                  </div>
                  <span className={`font-bold text-lg ${getMasteryColor(skillDetails[selectedSkill]?.mastery || "C")}`}>
                    {skillDetails[selectedSkill]?.mastery || "C"}
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${getMasteryGradient(skillDetails[selectedSkill]?.mastery || "C")} h-2.5`}
                    style={{ width: calculateXpBarWidth(skillDetails[selectedSkill]?.xp || 0) }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 rounded-full text-sm bg-slate-800 text-slate-300 border border-slate-700">
                  {activeSkillTab.slice(0, -1)}
                </span>
                {skillDetails[selectedSkill]?.mastery === "S" && (
                  <span className="px-3 py-1.5 rounded-full text-sm bg-purple-900/30 text-purple-300 border border-purple-700/50">
                    Master
                  </span>
                )}
                {skillDetails[selectedSkill]?.xp >= 90 && (
                  <span className="px-3 py-1.5 rounded-full text-sm bg-cyan-900/30 text-cyan-300 border border-cyan-700/50">
                    Expert
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 border-t border-slate-700/50 bg-slate-900/80 flex justify-end">
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 border border-slate-700/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
              </button>
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