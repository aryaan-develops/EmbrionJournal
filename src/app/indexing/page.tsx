"use client";

import { motion } from "framer-motion";
import { Search, Globe, Award, BookOpen, Database, Zap } from "lucide-react";

const indexingPartners = [
    {
        name: "Google Scholar",
        description: "Indexed for broad academic visibility and citation tracking.",
        icon: Search,
        status: "Active"
    },
    {
        name: "CrossRef",
        description: "DOI assignment for all published manuscripts.",
        icon: Globe,
        status: "Active"
    },
    {
        name: "ROAD",
        description: "Directory of Open Access Scholarly Resources.",
        icon: BookOpen,
        status: "Process"
    },
    {
        name: "SJIF",
        description: "Scientific Journal Impact Factor evaluation.",
        icon: Award,
        status: "Process"
    },
    {
        name: "ResearchGate",
        description: "Professional network for scientists and researchers.",
        icon: Database,
        status: "Active"
    },
    {
        name: "DRJI",
        description: "Directory of Research Journals Indexing.",
        icon: Zap,
        status: "Active"
    }
];

export default function IndexingPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-40 pb-24 px-4 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-lavender/5 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4 mb-20"
                >
                    <h2 className="text-brand-purple font-black tracking-widest uppercase text-sm">Visibility & Impact</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                        Indexing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-lavender">Abstracting</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium">
                        TEE is committed to increasing the reach and visibility of your research through integration with global academic databases.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {indexingPartners.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[40px] p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group transition-all duration-500"
                        >
                            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-brand-lavender transition-colors duration-500 shadow-inner">
                                <item.icon className="w-10 h-10 text-brand-purple group-hover:text-white transition-colors duration-500" />
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-3">{item.name}</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <div className={`px-5 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border ${item.status === "Active"
                                    ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                    : "bg-amber-50 text-amber-600 border-amber-100"
                                }`}>
                                {item.status}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 bg-slate-900 rounded-[50px] relative overflow-hidden text-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent opacity-50" />
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl font-black text-white">Continuous Expansion</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            We are constantly working to include TEE in more prestigious databases including Scopus and Web of Science. Our editorial team follows high standards of peer-review to ensure eligibility for top-tier indexing.
                        </p>
                        <div className="pt-4">
                            <button className="bg-white text-slate-900 font-black px-10 py-5 rounded-2xl hover:bg-brand-lavender hover:text-white transition-all duration-300 shadow-xl text-sm tracking-widest uppercase">
                                View Publication Ethics
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
