"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Target, 
  Users, 
  Eye, 
  ShieldCheck, 
  CheckCircle2,
  Cpu,
  Globe,
  Beaker,
  Scale,
  Search,
  AlertTriangle,
  UserPlus,
  ArrowRight,
  Clock,
  Briefcase,
  Award
} from "lucide-react";

export default function AboutPage() {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] md:text-sm font-black tracking-widest uppercase"
          >
            <Globe className="w-3 h-3 md:w-4 md:h-4" />
            Global Engineering Platform
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.1]"
          >
            About Transactions on <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x">
              Emerging Engineering (TEE)
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-base md:text-xl text-slate-500 font-medium leading-relaxed"
          >
            Advancing engineering knowledge and addressing technological challenges through high-quality, original research and interdisciplinary collaboration.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32 pb-20 md:pb-32">
        
        {/* 1. AIM AND SCOPE */}
        <motion.section 
          id="aim-and-scope" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-40 space-y-10 md:space-y-16"
        >
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
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
            <motion.div variants={itemVariants} className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-50 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 p-6 md:p-8 flex items-center justify-center">
              <Image 
                src="/engineering_research_vector_1772249009317.png" 
                alt="Engineering Research Illustration" 
                fill 
                className="object-contain p-8 md:p-12"
              />
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

        {/* 2. PEER REVIEW PROCESS */}
        <motion.section 
          id="peer-review" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-40 space-y-12 md:space-y-20"
        >
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
             <motion.div variants={itemVariants} className="order-2 lg:order-1 relative aspect-square bg-slate-50 rounded-[30px] md:rounded-[60px] overflow-hidden shadow-inner border border-slate-100 p-8 md:p-12 flex items-center justify-center">
              <Image 
                src="/peer_review_vector_1772249028532.png" 
                alt="Peer Review Illustration" 
                fill 
                className="object-contain p-8 md:p-12 opacity-80"
              />
             </motion.div>
             <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-6 md:space-y-8">
               <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:gap-4 text-brand-purple">
                    <Eye className="w-8 h-8 md:w-10 md:h-10" />
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900">Peer Review Process</h2>
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
                
                <motion.div variants={itemVariants} className="p-6 md:p-8 bg-brand-purple rounded-[30px] md:rounded-[40px] text-white space-y-4 md:space-y-6">
                  <h4 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-black uppercase tracking-widest">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-brand-lavender" /> Typical Timeline
                  </h4>
                  <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                    <div className="space-y-1 md:space-y-2">
                       <p className="text-brand-lavender text-[8px] md:text-[10px] font-black uppercase">Screening</p>
                       <p className="text-lg md:text-2xl font-black">1 Week</p>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                       <p className="text-brand-lavender text-[8px] md:text-[10px] font-black uppercase">Review</p>
                       <p className="text-lg md:text-2xl font-black">3-5 Wks</p>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                       <p className="text-brand-lavender text-[8px] md:text-[10px] font-black uppercase">Decision</p>
                       <p className="text-lg md:text-2xl font-black">6-8 Wks</p>
                    </div>
                  </div>
                </motion.div>
               </div>
             </motion.div>
          </div>
        </motion.section>

        {/* 3. ETHICS AND PLAGIARISM */}
        <motion.section 
          id="publication-ethics" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-40 space-y-12 md:space-y-20"
        >
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20">
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
                     
                     <div className="grid grid-cols-3 gap-2 md:gap-4">
                        <div className="p-3 md:p-4 bg-green-50 rounded-xl md:rounded-2xl text-center border border-green-100">
                           <p className="text-green-700 font-black text-base md:text-lg">≤ 10%</p>
                           <p className="text-[7px] md:text-[10px] uppercase font-bold text-green-600">Acceptable</p>
                        </div>
                        <div className="p-3 md:p-4 bg-orange-50 rounded-xl md:rounded-2xl text-center border border-orange-100">
                           <p className="text-orange-700 font-black text-base md:text-lg">11-20%</p>
                           <p className="text-[7px] md:text-[10px] uppercase font-bold text-orange-600">Revision</p>
                        </div>
                        <div className="p-3 md:p-4 bg-red-50 rounded-xl md:rounded-2xl text-center border border-red-100">
                           <p className="text-red-700 font-black text-base md:text-lg">&gt; 20%</p>
                           <p className="text-[7px] md:text-[10px] uppercase font-bold text-red-600">Rejection</p>
                        </div>
                     </div>
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

            <motion.div variants={itemVariants} className="hidden lg:flex relative aspect-square bg-slate-50 rounded-[60px] overflow-hidden shadow-inner border border-slate-100 p-12 items-center justify-center">
              <Image 
                src="/ethics_integrity_vector_1772249045362.png" 
                alt="Ethics and Integrity Illustration" 
                fill 
                className="object-contain p-16"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* 4. JOIN AS REVIEWER */}
        <motion.section 
          id="join-as-reviewer" 
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
                          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight">Join as a Reviewer</h2>
                       </div>
                       <p className="text-base md:text-xl text-brand-lavender/90 font-medium">Contribute to the global research community and enhance your profile.</p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                       <h4 className="text-brand-lavender/70 font-black uppercase tracking-[0.2em] text-[10px] md:text-sm text-center lg:text-left">Eligibility Criteria</h4>
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
