"use client";

import { motion } from "framer-motion";

import {
    ShieldCheck,
    AlertTriangle,
    Scale
} from "lucide-react";

export default function PublicationEthicsPage() {
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
                        Ethics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x">Plagiarism</span>
                    </motion.h1>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32 pb-20 md:pb-32">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="space-y-12 md:space-y-20"
                >
                    <div className="grid grid-cols-1 gap-10 md:gap-20">
                        <motion.div variants={itemVariants} className="space-y-8 md:space-y-12">
                            <div className="space-y-3 md:space-y-4">
                                <div className="flex items-center gap-3 md:gap-4 text-brand-purple">
                                    <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
                                    <h2 className="text-2xl md:text-4xl font-black text-slate-900">Ethics & Plagiarism</h2>
                                </div>
                                <div className="w-16 md:w-20 h-1.5 md:h-2 bg-brand-purple rounded-full" />
                            </div>

                            <div className="space-y-6 md:space-y-8">
                                <motion.div variants={itemVariants} className="p-6 md:p-8 bg-white border border-slate-200 rounded-[30px] md:rounded-[40px] space-y-4 md:space-y-6 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] scale-150 group-hover:scale-110 transition-transform duration-700">
                                        <AlertTriangle className="w-24 h-24 md:w-32 md:h-32" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2 md:gap-3">
                                        <Scale className="w-5 h-5 md:w-6 md:h-6 text-brand-purple" /> Plagiarism Policy
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">TEE maintains zero tolerance for plagiarism. All submissions are checked using software like Turnitin/iThenticate.</p>


                                </motion.div>

                                <motion.div variants={itemVariants} className="bg-brand-purple p-8 md:p-10 rounded-[30px] md:rounded-[40px] space-y-6 md:space-y-8">
                                    <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-widest text-center md:text-left">Ethical Duties</h3>
                                    <div className="space-y-4 md:space-y-6">
                                        {[
                                            { role: "Authors", duty: "Original work, properly cited, no duplicate submissions." },
                                            { role: "Editors", duty: "Confidential review, unbiased academic merit decisions." },
                                            { role: "Reviewers", duty: "Constructive feedback, declare conflicts, maintain privacy." },
                                        ].map((item) => (
                                            <div key={item.role} className="flex gap-3 md:gap-4">
                                                <div className="shrink-0 w-1 md:w-1.5 h-auto bg-brand-lavender rounded-full" />
                                                <div className="space-y-0.5 md:space-y-1">
                                                    <p className="text-brand-lavender font-black text-[10px] md:text-xs uppercase tracking-widest">{item.role}</p>
                                                    <p className="text-white/70 text-xs md:text-sm font-medium leading-normal">{item.duty}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>


                    </div>
                </motion.section>
            </div>
        </div>
    );
}
