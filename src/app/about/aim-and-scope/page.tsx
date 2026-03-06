"use client";

import { motion } from "framer-motion";

import {
    Target,
    Cpu,
    Beaker,
    ArrowRight
} from "lucide-react";

export default function AimAndScopePage() {
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
                        Aim & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x">Scope</span>
                    </motion.h1>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32 pb-20 md:pb-32">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="space-y-10 md:space-y-16"
                >
                    <div className="grid grid-cols-1 gap-10 md:gap-16 items-center">
                        <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
                            <div className="space-y-3 md:space-y-4">
                                <div className="flex items-center gap-3 md:gap-4 text-brand-purple">
                                    <Target className="w-8 h-8 md:w-10 md:h-10" />
                                    <h2 className="text-2xl md:text-4xl font-black text-slate-900">Aim & Scope</h2>
                                </div>
                                <div className="w-16 md:w-20 h-1.5 md:h-2 bg-brand-purple rounded-full" />
                            </div>

                            <div className="space-y-4 md:space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Our Aim</h3>
                                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                                    Transactions on Emerging Engineering aims to provide a global platform for researchers, academicians, industry professionals, and policymakers to publish high-quality, original research that advances engineering knowledge and addresses emerging technological challenges. The journal promotes interdisciplinary collaboration and supports innovations that contribute to sustainable development, smart infrastructure, and next-generation technologies.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <motion.div variants={itemVariants} className="p-8 md:p-10 bg-slate-50 rounded-[30px] md:rounded-[40px] border border-slate-100 space-y-6">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-purple">
                                <Cpu className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900">Core Engineering</h3>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                                {[
                                    "Civil", "Mechanical", "Electrical", "Electronics", "Computer Science",
                                    "Information Tech", "Aerospace", "Chemical", "Materials"
                                ].map(tech => (
                                    <div key={tech} className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                                        <div className="w-1.5 h-1.5 bg-brand-lavender rounded-full" />
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-8 md:p-10 bg-brand-purple rounded-[30px] md:rounded-[40px] space-y-6 text-white overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lavender/10 rounded-full blur-3xl group-hover:bg-brand-lavender/20 transition-all duration-700" />
                            <div className="w-14 h-14 bg-white/10 rounded-2xl shadow-xl flex items-center justify-center text-brand-lavender">
                                <Beaker className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black">Emerging Tech</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "Artificial Intelligence & Machine Learning",
                                    "Internet of Things (IoT)",
                                    "Cyber-Physical Systems",
                                    "Sustainable & Green Engineering",
                                    "Bio-Engineering & Medical Technologies"
                                ].map(tech => (
                                    <div key={tech} className="flex items-center gap-3 text-sm text-brand-lavender/80 font-bold group/item">
                                        <ArrowRight className="w-4 h-4 text-brand-lavender group-hover/item:translate-x-1 transition-transform" />
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
