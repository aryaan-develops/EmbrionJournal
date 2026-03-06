"use client";

import { motion } from "framer-motion";
import {
    UserPlus,
    CheckCircle2,
    Award,
    Briefcase,
    Users,
    Globe
} from "lucide-react";

export default function JoinAsReviewerPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* HEADER SECTION */}
            <section className="pt-32 md:pt-48 pb-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white px-6">
                <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.1]"
                    >
                        Join as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x">Reviewer</span>
                    </motion.h1>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32 pb-20 md:pb-32">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="scroll-mt-40"
                >
                    <div className="relative bg-brand-purple rounded-[30px] md:rounded-[50px] p-8 md:p-12 lg:p-20 overflow-hidden text-white group">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 md:w-80 md:h-80 bg-brand-lavender/10 rounded-full blur-3xl group-hover:bg-brand-lavender/20 transition-all duration-700" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
                                <div className="space-y-3 md:space-y-4 text-center lg:text-left">
                                    <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-4 justify-center lg:justify-start">
                                        <UserPlus className="w-10 h-10 md:w-12 md:h-12 text-brand-lavender" />
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight">Eligibility</h2>
                                    </div>
                                    <p className="text-base md:text-xl text-brand-lavender/90 font-medium">Contribute to the global research community and enhance your profile.</p>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <h4 className="text-brand-lavender/70 font-black uppercase tracking-[0.2em] text-[10px] md:text-sm text-center lg:text-left">Criteria</h4>
                                    <ul className="grid gap-3 md:gap-4">
                                        {[
                                            "PhD in relevant engineering discipline",
                                            "Minimum 3–5 Scopus-indexed publications",
                                            "Academic or industry research experience",
                                            "ORCID ID (preferred)"
                                        ].map(text => (
                                            <li key={text} className="flex items-center gap-3 text-white/90 font-bold text-sm md:text-base">
                                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                                                </div>
                                                {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex justify-center lg:justify-start pt-4">
                                    <button className="px-8 md:px-10 py-4 md:py-5 bg-white text-brand-purple rounded-full font-black text-[12px] md:text-sm tracking-widest uppercase hover:bg-slate-50 transition-all shadow-2xl active:scale-95">
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 md:gap-4">
                                {[
                                    { icon: Award, label: "Recognition", val: "Certificate" },
                                    { icon: Briefcase, label: "Experience", val: "Editorial" },
                                    { icon: Users, label: "Network", val: "Community" },
                                    { icon: Globe, label: "Impact", val: "Global" },
                                ].map((card) => (
                                    <div key={card.label} className="p-5 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 space-y-3 md:space-y-4 hover:bg-white/20 transition-all cursor-default text-center">
                                        <card.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-lavender mx-auto" />
                                        <div className="space-y-0.5 md:space-y-1">
                                            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-lavender/80">{card.label}</p>
                                            <p className="font-black text-base md:text-lg">{card.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
