import React from 'react';
import { Star } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const About = ({ searchQuery = "", viewMode = "list" }) => {
    const summaryPoints = [
        "Associate Software Engineer with 1 year of experience developing and maintaining enterprise-grade web applications using JavaScript, Java, and MVC architecture.",
        "Currently contributing to a global e-commerce platform serving 10+ international markets at Accenture.",
        "Skilled in debugging complex systems, optimizing backend logic, and delivering accessible, production-ready code in Agile environments."
    ];

    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-5 p-5 bg-white/30 backdrop-blur-md rounded-[32px] border border-white/40 shadow-inner">
                <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/30">
                    <img 
                        src={profilePic} 
                        alt="Sameer Shaik" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-center md:text-left flex-1 min-w-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-[#1d1d1f]">Sameer Shaik</h1>
                    <p className="text-[#86868b] font-medium text-lg mt-0.5">Associate Software Engineer at Accenture</p>
                </div>
            </div>

            <div className="p-5 bg-white/50 rounded-3xl border border-white/40 shadow-sm hover:bg-white/70 transition-colors">
                <h3 className="text-[10px] font-black text-[#86868b] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFCC00]" /> Profile Summary
                </h3>
                <div className="space-y-2.5">
                    {summaryPoints.map((point, i) => (
                        <div key={i} className="flex gap-2.5 items-start">
                            <div className="w-1 h-1 rounded-full bg-[#FFCC00] mt-2 shrink-0" />
                            <p className="text-[13px] leading-relaxed text-[#1d1d1f] font-medium">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-5 bg-white/50 rounded-3xl border border-white/40 shadow-sm hover:bg-white/70 transition-colors">
                <h3 className="text-[10px] font-black text-[#86868b] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#AF52DE]" /> Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Young Achiever Award– secured MNC campus placement in 2025",
                        "Deloitte Virtual Internship– delivered Python data transformation solution with 100% test case accuracy",
                        "Accenture Intern 2025 Badge– recognized for impactful contributions during onsite internship"
                    ].map((ach, i) => (
                        <div key={i} className="p-3 bg-white/40 rounded-2xl border border-white/40 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AF52DE] to-[#5856D6] flex items-center justify-center text-white shrink-0 shadow-sm">
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                            <span className="text-[12px] font-bold text-[#1d1d1f] leading-tight">{ach}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4 flex justify-center md:justify-start">
                <a
                    href="/Sameer-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-2.5 bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-[13px] font-black text-[#1d1d1f] transition-all active:scale-[0.98] shadow-sm group"
                >
                    View Full Resume
                </a>
            </div>
        </div>
    );
};

export default About;
