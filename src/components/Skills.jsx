import React from 'react';

const Skills = ({ searchQuery = "", viewMode = "grid" }) => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "JavaScript (ES6+)", val: 95, color: "bg-[#FFCC00]" },
                { name: "Java", val: 85, color: "bg-[#FF9500]" },
                { name: "SQL", val: 80, color: "bg-[#5856D6]" },
                { name: "HTML5 / CSS3 / SCSS", val: 95, color: "bg-[#AF52DE]" }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React.js", val: 90, color: "bg-[#007AFF]" },
                { name: "jQuery", val: 80, color: "bg-[#5856D6]" },
                { name: "Bootstrap", val: 85, color: "bg-[#7952B3]" },
                { name: "Responsive Design", val: 95, color: "bg-[#34C759]" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Server-side JavaScript", val: 90, color: "bg-[#FFCC00]" },
                { name: "REST APIs", val: 85, color: "bg-[#5AC8FA]" },
                { name: "MVC Architecture", val: 90, color: "bg-[#AF52DE]" }
            ]
        },
        {
            title: "Enterprise Platforms",
            skills: [
                { name: "Salesforce Commerce Cloud", val: 85, color: "bg-[#00A1E0]" },
                { name: "Business Manager", val: 80, color: "bg-[#1d1d1f]" },
                { name: "ContentStack CMS", val: 80, color: "bg-[#001D4A]" }
            ]
        },
        {
            title: "Testing",
            skills: [
                { name: "Mocha & Chai", val: 90, color: "bg-[#8D6748]" },
                { name: "Unit Testing", val: 85, color: "bg-[#34C759]" },
                { name: "SonarQube Static Analysis", val: 85, color: "bg-[#4E9BCD]" }
            ]
        },
        {
            title: "Database",
            skills: [
                { name: "MySQL", val: 85, color: "bg-[#007AFF]" }
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git & GitLab", val: 95, color: "bg-[#F05032]" },
                { name: "JIRA", val: 90, color: "bg-[#0052CC]" },
                { name: "VS Code", val: 95, color: "bg-[#007ACC]" },
                { name: "Webpack", val: 80, color: "bg-[#8DD6F9]" },
                { name: "New Relic", val: 75, color: "bg-[#008C99]" }
            ]
        },
        {
            title: "Concepts",
            skills: [
                { name: "Object-Oriented Programming", val: 90, color: "bg-[#FF3B30]" },
                { name: "Data Structures & Algorithms", val: 85, color: "bg-[#5856D6]" },
                { name: "Agile / Scrum", val: 95, color: "bg-[#34C759]" },
                { name: "CI / CD", val: 85, color: "bg-[#AF52DE]" },
                { name: "Code Reviews", val: 90, color: "bg-[#FF9500]" }
            ]
        }
    ];

    const isMatch = (skill) => skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const filteredCategories = skillCategories.map(cat => ({
        ...cat,
        skills: cat.skills.filter(isMatch)
    })).filter(cat => cat.skills.length > 0);

    return (
        <div className="space-y-8 p-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className={`grid gap-x-12 gap-y-10 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredCategories.map((cat, i) => (
                    <div key={i} className="space-y-4">
                        <h3 className="text-[9px] font-black text-[#86868b] uppercase tracking-[0.2em] pl-1 border-b border-black/5 pb-2 mb-4">{cat.title}</h3>
                        <div className="space-y-4">
                            {cat.skills.map(s => (
                                <div key={s.name} className="group">
                                    <div className="flex justify-between text-[11px] font-black mb-1.5 px-1 transition-colors group-hover:text-[#007AFF]">
                                        <span>{s.name}</span>
                                        <span className="text-[#86868b] tabular-nums">{s.val}%</span>
                                    </div>
                                    <div className="h-1.5 bg-black/5 rounded-full overflow-hidden shadow-inner border border-black/5">
                                        <div className={`h-full ${s.color} rounded-full transition-all duration-1000 ease-out shadow-sm`} style={{ width: `${s.val}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {!isAnyMatchElement && (
                <div className="py-20 flex flex-col items-center justify-center text-center opacity-40 font-bold text-sm w-full">
                    <div className="w-12 h-12 mb-4 opacity-20 border-4 border-current rounded-lg flex items-center justify-center">
                        <div className="w-6 h-1 bg-current rounded-full" />
                    </div>
                    No skills found for "{searchQuery}"
                </div>
            )}
        </div>
    );
};

export default Skills;
