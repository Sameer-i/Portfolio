import React from 'react';
import { History } from 'lucide-react';
import GitamLogo from '../assets/gitam-logo.png';
import AgniravaLogo from '../assets/agnirava-logo.png';

const Experience = ({ searchQuery = "", viewMode = "list" }) => {
    const experiences = [
        {
            role: "Associate Software Engineer",
            org: "Accenture | Client: Bose Corporation– Global E-commerce Platform",
            type: "Full-time",
            period: "Oct 2025 – Present",
            location: "Hyderabad",
            logo: null,
            color: "text-[#AF52DE]",
            bg: "bg-[#AF52DE]/10",
            points: [
                "Developed and maintained e-commerce storefront using server-side JavaScript and MVC architecture, supporting 10+ international markets with localized currency, language, and catalog",
                "Optimized backend data flow by debugging controller-to-model interactions; resolved critical search filter defects, which improved data retrieval accuracy for 11 core product categories",
                "Ensured 100% ADA compliance across all global domains by resolving 5+ critical WCAG 2.2 accessibility violations, specifically targeting touch target sizing and pointer alternatives",
                "Debugged carousel auto-scroll defect by fixing JavaScript event binding and implementing slider API methods restored category navigation UX on listing pages",
                "Collaborated with client stakeholders and international QA teams for defect triage– resolved 15+ production defects, reducing resolution cycle time by 30%",
                "Integrated third-party services including Adyen payments, ContentStack CMS, and Salesforce Marketing Cloud",
                "Maintained code quality through Git/GitLab version control, peer code reviews, and CI/CD pipeline workflows"
            ]
        },
        {
            role: "Associate Software Engineer Intern– Certificate",
            org: "Accenture | Client: Bose Corporation",
            type: "Internship",
            period: "Feb 2025– June 2025",
            location: "Bengaluru",
            logo: null,
            color: "text-[#007AFF]",
            bg: "bg-[#007AFF]/10",
            points: [
                "Built unit test suites for 22+ backend JavaScript modules using Mocha and Chai– achieved 100% code coverage",
                "Resolved 100+ SonarQube code quality issues before GitLab commits– improved compliance score by 40%",
                "Completed 10+ KT sessions on MVC architecture and design patterns– ramped up to handle production tickets independently within 8 weeks"
            ]
        }
    ];

    const filtered = experiences.filter(exp =>
        exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.points.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}`}>
            {filtered.map((exp, i) => (
                <div key={i} className={`group flex gap-6 p-6 bg-white/40 backdrop-blur-md rounded-[32px] border border-white/40 hover:bg-white/70 transition-all shadow-sm ${viewMode === 'grid' ? 'flex-col items-center text-center' : 'flex-row'}`}>
                    <div className={`w-16 h-16 shrink-0 rounded-[22px] overflow-hidden flex items-center justify-center shadow-xl border-4 border-white bg-white transition-transform duration-300 group-hover:scale-110`}>
                        {exp.logo ? (
                            <img src={exp.logo} alt={exp.org} className="w-full h-full object-cover" />
                        ) : (
                            <div className={`w-full h-full rounded-[16px] ${exp.bg} flex items-center justify-center ${exp.color}`}>
                                <History className="w-7 h-7" />
                            </div>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className={`mb-1 ${viewMode === 'grid' ? 'flex flex-col items-center gap-2' : ''}`}>
                            <div className="flex justify-between items-center w-full mb-1">
                                <span className={`text-[10px] font-black uppercase tracking-widest opacity-40`}>{exp.period}</span>
                                {exp.location && <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{exp.location}</span>}
                            </div>
                            <div className="flex justify-between items-start w-full gap-4">
                                <h4 className="text-[15px] font-black text-[#1d1d1f] tracking-tight leading-tight">{exp.role}</h4>
                                <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${exp.bg} ${exp.color} border border-current/10 shadow-sm shrink-0`}>{exp.type}</span>
                            </div>
                        </div>
                        <div className="text-[13px] font-bold text-[#424245] leading-tight opacity-80 mb-3">{exp.org}</div>
                        <div className="space-y-2">
                            {exp.points.map((point, idx) => (
                                <div key={idx} className="flex gap-2 items-start">
                                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${exp.bg.replace('10', '40')} ${exp.color.replace('text-', 'bg-')}`} />
                                    <p className="text-[12px] text-[#86868b] leading-relaxed font-medium tracking-tight">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            {filtered.length === 0 && (
                <div className="py-20 flex flex-col items-center justify-center text-center opacity-40 font-bold text-sm w-full col-span-full">
                    <History className="w-12 h-12 mb-4 opacity-20" />
                    No results found for "{searchQuery}"
                </div>
            )}
        </div>
    );
};

export default Experience;
