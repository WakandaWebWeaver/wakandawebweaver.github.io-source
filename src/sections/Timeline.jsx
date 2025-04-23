import { React, useState } from "react";


export default function Timeline() {
    const timeline = [
        { id: 1, date: "January 2025 - April 2025", role: "WebDev Team Co-Lead - TEDxSreyasInstitute", description: "Co-Lead for the Web Development team at TEDxSreyasInstitute" },
        { id: 2, date: "September 2024 - March 2025", role: "Department Magazine Editor", description: "Worked on the department magazine, 'AILYRA'" },
        { id: 3, date: "2021", role: "Started Self-taught Development Journey", description: "Began learning programming fundamentals and web development" }
      ];

    return (
        <section id="timeline" className="relative py-20">
          <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-lg shadow-cyan-500/10">
            <div className="container mx-auto px-4">
              <div className="flex items-center mb-12 p-4">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
                  Timeline
                </h2>
                <div className="flex-1 h-px ml-4 bg-gradient-to-r from-cyan-300/40 to-purple-500/40"></div>
              </div>

              
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>
                
                {timeline.map((item, index) => (
                  <div key={item.id} className="relative mb-12">
                    <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                          <div className="text-cyan-300 font-semibold mb-2">{item.date}</div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                          <p className="text-slate-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute left-0 md:left-1/2 top-4 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-cyan-500 z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    );
}