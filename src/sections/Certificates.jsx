import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const certificatesRef = useRef(null);
  const overlayRef = useRef(null);
  const popupRef = useRef(null);
  const certRefs = useRef([]);

  const certificates = [
    {
      id: 1,
      title: "Agile Certificate",
      description: "Agile methodology certification from Simplilearn.",
      date: "October 2024",
      certPath: "assets/certs/agile.pdf",
    },
    {
      id: 2,
      title: "AI Workshop",
      description: "Certification from AI workshop organized at SIET.",
      date: "November 2024",
      certPath: "assets/certs/ai_workshop.pdf",
    },
    {
      id: 3,
      title: "Android Basics",
      description: "Android development basics certification from Codecademy.",
      date: "April 2025",
      certPath: "assets/certs/android_basics.pdf",
    },
    {
      id: 4,
      title: "Classifying Text using PyTorch",
      description: "Certification of PyTorch focusing on text classification, from Codecademy.",
      date: "March 2025",
      certPath: "assets/certs/pytorch.pdf",
    },
    {
      id: 5,
      title: "Esvin Joshua - Swift",
      description: "Swift programming language certification from Codecademy.",
      date: "January 2025",
      certPath: "assets/certs/swift.pdf",
      borderColor: "border-red-500/30",
    },
    {
      id: 6,
      title: "Intro to GenAI - The art of the possible",
      description: "Introduction to Generative AI certification from AWS Training & Certifications.",
      date: "November 2024",
      certPath: "assets/certs/gen.pdf",
    },
    {
      id: 7,
      title: "IELTS Certificate",
      description: "IELTS English proficiency test certification.",
      date: "August 2024",
      certPath: "assets/certs/ielts.pdf",
    },
    {
      id: 8,
      title: "IoT Certificate",
      description: "Internet of Things (IoT) certification from AWS Training & Certifications.",
      date: "November 2024",
      certPath: "assets/certs/iot.pdf",
    },
    {
      id: 9,
      title: "IPv6 Design",
      description: "Certification in IPv6 design and architecture from AWS Training & Certifications.",
      date: "June 2024",
      certPath: "assets/certs/ipv6.pdf",
    },
    {
      id: 10,
      title: "Kali Certificate",
      description: "Kali Linux certification focusing on penetration testing from Simplilearn.",
      date: "November 2024",
      certPath: "assets/certs/kali.pdf", 
    },
    {
      id: 11,
      title: "ML in Python",
      description: "Machine Learning in Python certification from Simplilearn.",
      date: "November 2024",
      certPath: "assets/certs/ml_python.pdf",
    },
    {
      id: 12,
      title: "ML on AWS",
      description: "Machine Learning on AWS certification from AWS Training & Certifications.",
      date: "November 2024",
      certPath: "assets/certs/ml_aws.pdf",
    },
    {
      id: 13,
      title: "PyTorch Certificate",
      description: "Certification in PyTorch framework for deep learning from Codecademy.",
      date: "January 2025",
      certPath: "assets/certs/pytorch_dl.pdf",
    },
    {
      id: 14,
      title: "SQL Certificate",
      description: "SQL database management certification from Codecademy.",
      date: "April 2025",
      certPath: "assets/certs/SQL_cert.pdf",
    },
    {
      id: 15,
      title: "Swift for iOS Development",
      description: "Certification in iOS app development with Swift from Codecademy.",
      date: "January 2025",
      certPath: "assets/certs/swift_ios.pdf",
    },
  ];

  useEffect(() => {
    if (certificatesRef.current) {
      gsap.fromTo(
        certificatesRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    if (certRefs.current.length > 0) {
      gsap.fromTo(
        certRefs.current,
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

  const openCertificate = (cert) => {
    setActiveCert(cert);
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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

  const closePopup = () => {
    gsap.to(popupRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => setActiveCert(null),
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
    <section className="relative py-24" id="certificates">
      <div 
        ref={certificatesRef}
        className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-xl shadow-cyan-500/5"
      >
        <div className="container mx-auto px-4">
        <div className="flex items-center mb-12 p-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
              Certificates
          </h2>
            <div className="flex-1 h-px ml-4 bg-gradient-to-r from-cyan-300/40 to-purple-500/40"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                ref={(el) => (certRefs.current[index] = el)}
                className={`bg-gradient-to-br p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
                onClick={() => openCertificate(cert)}
              >
                <div className="bg-slate-900/60 backdrop-blur-sm p-5 rounded-lg h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-slate-300 mb-4 flex-grow">{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-4 py-1.5 rounded-full text-xs bg-slate-800/80 text-slate-200 border border-slate-700/80 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeCert && (
        <div
          ref={overlayRef}
          className="fixed inset-0 backdrop-blur-md bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div
            ref={popupRef}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col w-full max-w-5xl relative pointer-events-auto border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-700/50 bg-slate-900/80">
              <h3 className="text-2xl text-white font-bold mb-2">{activeCert.title}</h3>
              <p className="text-slate-300">{activeCert.description}</p>
            </div>

            <div className="h-[550px] relative flex-grow">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/90">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                    <p className="mt-4 text-slate-300">Loading certificate...</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={activeCert.certPath}
                  width="100%"
                  height="100%"
                  title={activeCert.title}
                  className="border-0"
                ></iframe>
              )}
            </div>

            <div className="p-4 border-t border-slate-700/50 bg-slate-900/80 flex justify-between items-center">
              <div className="flex items-center text-slate-300 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{activeCert.date}</span>
              </div>
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
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