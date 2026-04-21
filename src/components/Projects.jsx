import React from 'react';
import { Palette, Code2, ExternalLink, Github } from 'lucide-react';

const Projects = ({ searchQuery = "", viewMode = "grid" }) => {
    const projects = [
        {
            id: 1,
            title: "Hotel Management Dashboard",
            tag: "React.js | Supabase",
            tagColor: "bg-[#007AFF]/10 text-[#007AFF]",
            year: "2024",
            points: [
                "Built admin dashboard with booking analytics, cabin CRUD, and real-time charts– improved operational efficiency by 30%",
                "Designed reusable UI using Compound Component Pattern and custom hooks– reduced code duplication by 20%",
                "Implemented auth, pagination, filtering, dark mode, and Supabase REST API integration"
            ],
            tech: "React.js, Supabase, React Query, Recharts",
            link: "https://github.com/sameer-i",
            linkText: "View on GitHub",
            linkIcon: <Github className="w-3 h-3" />,
            icon: <Code2 className="w-6 h-6" />,
            theme: "from-[#007AFF] to-[#00C6FF]"
        },
        {
            id: 2,
            title: "TalentBridge: Job Portal",
            tag: "Java | MySQL",
            tagColor: "bg-[#AF52DE]/10 text-[#AF52DE]",
            year: "2024",
            points: [
                "Developed full-stack job portal with CRUD operations and MVC pattern– enabled management of 100+ job listings",
                "Built search and filter system by skills, experience, and technology stack",
                "Delivered responsive UI using JSP and Bootstrap– improved cross-device usability by 25%"
            ],
            tech: "Java, JSP, MySQL, Bootstrap",
            link: "https://github.com/sameer-i",
            linkText: "View on GitHub",
            linkIcon: <Github className="w-3 h-3" />,
            icon: <Code2 className="w-6 h-6" />,
            theme: "from-[#AF52DE] to-[#663399]"
        }
    ];

    const filtered = projects.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.points.some(pt => pt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}`}>
            {filtered.map((project) => (
                <div key={project.id} className={`group bg-white/50 backdrop-blur-md p-6 rounded-[32px] border border-white/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${viewMode === 'list' ? 'flex items-center gap-6' : ''}`}>
                    <div className={`w-12 h-12 shrink-0 bg-gradient-to-br ${project.theme} rounded-2xl flex items-center justify-center text-white shadow-lg ${viewMode === 'list' ? '' : 'mb-4'}`}>
                        {project.icon}
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className={`font-extrabold text-[#1d1d1f] flex items-center gap-2 text-lg ${viewMode === 'grid' ? '' : 'text-base'}`}>
                                {project.title}
                                <div className={`px-2 py-0.5 ${project.tagColor} text-[9px] rounded-full uppercase font-black`}>{project.tag}</div>
                            </h3>
                            <span className="text-[10px] font-black text-[#86868b] opacity-40">{project.year}</span>
                        </div>
                        <div className="space-y-2 mt-2 mb-4">
                            {project.points.map((point, idx) => (
                                <div key={idx} className="flex gap-2 items-start">
                                    <div className="w-1 h-1 rounded-full bg-[#007AFF] mt-1.5 shrink-0 opacity-40" />
                                    <p className="text-[12px] text-[#86868b] leading-tight font-medium">{point}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[#86868b] opacity-40 block mb-1">Tech Stack</span>
                            <p className="text-[11px] font-bold text-[#424245]">{project.tech}</p>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-extra-bold text-[#007AFF] hover:underline">
                            {project.linkText} {project.linkIcon}
                        </a>
                    </div>
                </div>
            ))}
            {filtered.length === 0 && (
                <div className="py-20 col-span-full flex flex-col items-center justify-center text-center opacity-40 font-bold text-sm w-full">
                    <Palette className="w-12 h-12 mb-4 opacity-20" />
                    No results found for "{searchQuery}"
                </div>
            )}
        </div>
    );
};

export default Projects;
