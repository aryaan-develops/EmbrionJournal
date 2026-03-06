"use client";

import { motion } from "framer-motion";

import {
    Eye
} from "lucide-react";

export default function PeerReviewPage() {
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
                        Peer Review <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x">Process</span>
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
                    <div className="grid grid-cols-1 gap-10 md:gap-20 items-center">
                        <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-6 md:space-y-8">
                            <div className="space-y-3 md:space-y-4">
                                <div className="flex items-center gap-3 md:gap-4 text-brand-purple">
                                    <Eye className="w-8 h-8 md:w-10 md:h-10" />
                                    <h2 className="text-2xl md:text-4xl font-black text-slate-900">Review Process</h2>
                                </div>
                                <div className="w-16 md:w-20 h-1.5 md:h-2 bg-brand-purple rounded-full" />
                            </div>

                            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                                We follow a rigorous <span className="text-brand-purple font-bold">Double-Blind Peer Review</span> process to ensure the highest quality of research and prevent bias.
                            </p>

                            <div className="space-y-6 md:space-y-8">
                                <div className="grid gap-4 md:gap-6">
                                    {[
                                        { step: 1, title: "Manuscript Submission", desc: "Authors submit through online system." },
                                        { step: 2, title: "Initial Screening", desc: "Scope, Formatting & Plagiarism check." },
                                        { step: 3, title: "Editor Assignment", desc: "Expert handling editor is assigned." },
                                        { step: 4, title: "Double-Blind Review", desc: "2-3 independent subject experts review." },
                                        { step: 5, title: "Final Decision", desc: "Accept, Revision, or Reject based on reports." },
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={item.step}
                                            variants={itemVariants}
                                            className="flex gap-4 md:gap-6 items-start p-4 md:p-6 bg-white border border-slate-100 rounded-[24px] md:rounded-3xl hover:border-brand-lavender hover:shadow-xl transition-all"
                                        >
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-brand-purple text-white flex items-center justify-center font-black text-lg md:text-xl shrink-0">
                                                {item.step}
                                            </div>
                                            <div className="space-y-0.5 md:space-y-1">
                                                <h4 className="font-black text-slate-900 uppercase tracking-tight text-sm md:text-base">{item.title}</h4>
                                                <p className="text-slate-500 text-[12px] md:text-sm font-medium">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>


                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
