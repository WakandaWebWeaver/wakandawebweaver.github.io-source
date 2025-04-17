import { React, useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function Skills() {
  const [activeSkillTab, setActiveSkillTab] = useState('languages');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const sectionRef = useRef(null);
  const dialogRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

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
    Dart: { xp: 80, mastery: "A", desc: "Flutter’s sidekick. Cross-platform swag." },
    HTML: { xp: 99, mastery: "S", desc: "The backbone of every site." },
    CSS: { xp: 85, mastery: "A", desc: "Make it pretty or die trying." },
    SQL: { xp: 75, mastery: "A", desc: "Database whisperer." },
    React: { xp: 88, mastery: "A+", desc: "UI savant. Reusable component god." },
    Django: { xp: 77, mastery: "C+", desc: "Python’s fullstack wizard." },
    Flask: { xp: 83, mastery: "A+", desc: "Quick n’ simple APIs." },
    Flutter: { xp: 80, mastery: "S", desc: "Cross-platform magic." },
    Express: { xp: 70, mastery: "B", desc: "Minimalist Node API beast." },
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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (selectedSkill && dialogRef.current) {
      gsap.fromTo(dialogRef.current,
        { scale: 0.8, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.4, ease: "power2.out" }
      );
    }
  }, [selectedSkill]);

  const tabsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  function calculateXpBarWidth(mastery) {
    switch (mastery) {
      case 'S':
        return '100%';
      case 'A+':
        return '95%';
      case 'A':
        return '90%';
      case 'B+':
        return '85%';
      case 'B':
        return '80%';
      case 'C+':
        return '75%';
      case 'C':
        return '70%';
      default:
        return '0%';
    }
  }

  return (
    <section id="skills" ref={sectionRef} className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12 p-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
            Skills
          </h2>
          <div className="flex-1 h-px ml-4 bg-gradient-to-r from-cyan-300/40 to-purple-500/40"></div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={tabsVariants}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex p-1 rounded-lg bg-slate-800/70 backdrop-blur-sm">
            {Object.keys(skills).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`py-2 px-6 rounded-md font-medium transition-all ${
                  activeSkillTab === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative min-h-[260px] mb-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSkillTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {skills[activeSkillTab].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="group cursor-pointer bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="h-12 flex items-center justify-center mb-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent group-hover:opacity-100 transition-opacity">
                        {skill.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-center font-medium text-slate-300 group-hover:text-white transition-colors">
                    {skill}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <div 
              ref={dialogRef}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-[90%] max-w-sm text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-2 text-cyan-300">{selectedSkill}</h3>
              <p className="text-sm text-slate-300 mb-4">
                {skillDetails[selectedSkill]?.desc || "No data available."}
              </p>
              <div className="mb-2">📈 XP: {skillDetails[selectedSkill]?.xp ?? "??"}%</div>
              <div className="mb-2">🏆 Mastery: {skillDetails[selectedSkill]?.mastery ?? "?"}</div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2.5 rounded-full"
                  style={{ width: calculateXpBarWidth(skillDetails[selectedSkill]?.mastery) }}
                >
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
