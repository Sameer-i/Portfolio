import React from 'react';
import { Monitor } from 'lucide-react';
import GitamLogo from '../assets/gitam-logo.png';
import AakashLogo from '../assets/aakash-logo.png';
import TimpanyLogo from '../assets/timpany-logo.png';
import AgniravaLogo from '../assets/agnirava-logo.png';

const Education = ({ searchQuery = "", viewMode = "list" }) => {
    const educationData = [
        {
            org: "GITAM University, Visakhapatnam",
            degree: "Master of Computer Applications (MCA)",
            detail: "CGPA: 8.55",
            period: "Aug 2023– May 2025",
            logo: GitamLogo,
            color: "text-[#007AFF]",
            border: "border-[#007AFF]"
        },
        {
            org: "GITAM University, Visakhapatnam",
            degree: "Bachelor of Computer Applications (BCA)",
            detail: "CGPA: 7.98",
            period: "Jun 2020– May 2023",
            logo: GitamLogo,
            color: "text-[#34C759]",
            border: "border-[#34C759]"
        }
    ];

    const certificationData = [
        {
            org: "Meta (Coursera)",
            degree: "JavaScript Developer",
            detail: "Professional Certificate",
            period: "2024",
            logo: null,
            color: "text-[#AF52DE]",
            border: "border-[#AF52DE]"
        },
        {
            org: "Meta (Coursera)",
            degree: "Advanced React",
            detail: "Specialization",
            period: "2024",
            logo: null,
            color: "text-[#AF52DE]",
            border: "border-[#AF52DE]"
        },
        {
            org: "PrepInsta",
            degree: "Java Programming",
            detail: "Certification",
            period: "2024",
            logo: null,
            color: "text-[#FF9500]",
            border: "border-[#FF9500]"
        },
        {
            org: "Meta (Coursera)",
            degree: "Back-End Development",
            detail: "Specialization",
            period: "2024",
            logo: null,
            color: "text-[#007AFF]",
            border: "border-[#007AFF]"
        },
        {
            org: "Coursera",
            degree: "Version Control using Git",
            detail: "Skill Badge",
            period: "2024",
            logo: null,
            color: "text-[#34C759]",
            border: "border-[#34C759]"
        },
        {
            org: "Accenture",
            degree: "Atlassian Rovo Certification",
            detail: "Enterprise Training",
            period: "2025",
            logo: null,
            color: "text-[#AF52DE]",
            border: "border-[#AF52DE]"
        },
        {
            org: "Accenture",
            degree: "Generative AI",
            detail: "Professional Badge",
            period: "2025",
            logo: null,
            color: "text-[#FFCC00]",
            border: "border-[#FFCC00]"
        }
    ];

    const filterItems = (items) => items.filter(item =>
        item.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.detail.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredEducation = filterItems(educationData);
    const filteredCertifications = filterItems(certificationData);

    const renderSection = (title, items, iconColor) => (
        <div className="mb-12 last:mb-0">
            <h3 className="text-[10px] font-black text-[#86868b] uppercase tracking-widest mb-8 flex items-center gap-2">
                <Monitor className={`w-4 h-4 ${iconColor}`} /> {title}
            </h3>
            <div className={`space-y-0 ml-6 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : ''}`}>
                {items.map((item, i) => (
                    <div key={i} className={`relative border-l-2 ${item.border} pl-20 pb-16 last:pb-0 ${viewMode === 'grid' ? 'bg-white/40 p-8 rounded-[32px] border-2 border-l-8' : ''}`}>
                        {item.logo && (
                            <div className="absolute left-[-34px] top-0 w-16 h-16 rounded-[22px] overflow-hidden shadow-2xl shrink-0 border-[5px] border-white bg-white z-10 transition-transform duration-300 hover:scale-110">
                                <img src={item.logo} alt={item.org} className="w-full h-full object-cover" />
                            </div>
                        )}
                        <div className="flex-1 min-w-0 pt-0.5">
                            <div className="flex justify-between items-start mb-1">
                                <span className={`text-[10px] font-black uppercase tracking-widest opacity-40`}>{item.period}</span>
                            </div>
                            <div className="text-[17px] font-black text-[#1d1d1f] tracking-tight leading-tight mb-1">{item.org}</div>
                            <div className="text-[14px] font-bold text-[#424245] opacity-80">{item.degree}</div>
                            <div className={`text-[12px] font-black ${item.color} mt-4 inline-block px-3 py-1 rounded-full bg-current/5 border border-current/10 shadow-sm`}>{item.detail}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className={`p-6 bg-white/50 rounded-3xl border border-white/40 shadow-sm transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto max-h-full custom-scrollbar`}>
            {renderSection("Education History", filteredEducation, "text-[#007AFF]")}
            {filteredCertifications.length > 0 && (
                <>
                    <div className="h-[1px] bg-black/5 my-12 mx-[-24px]" />
                    {renderSection("Certifications", filteredCertifications, "text-[#AF52DE]")}
                </>
            )}
            {filteredEducation.length === 0 && filteredCertifications.length === 0 && (
                <div className="py-20 text-center opacity-40 font-bold text-xs">
                    No results for "{searchQuery}"
                </div>
            )}
        </div>
    );
};

export default Education;
