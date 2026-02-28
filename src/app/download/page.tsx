"use client";

import { motion } from "framer-motion";
import { Download, FileText, FileBadge, Archive, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function DownloadPage() {
  const resources = [
    {
      title: "Manuscript Template",
      description: "Standard Word template (.docx) for journal submissions.",
      version: "v2.4",
      size: "1.2 MB",
      icon: FileText
    },
    {
      title: "Author Guidelines",
      description: "Comprehensive guide on formatting, ethics, and submission.",
      version: "2024 Edition",
      size: "4.5 MB",
      icon: FileBadge
    },
    {
      title: "Sample Paper",
      description: "A reference paper showing the final layout and styling.",
      version: "Current",
      size: "2.8 MB",
      icon: Archive
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(203,180,212,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-brand-purple/20 rounded-3xl flex items-center justify-center mx-auto border border-brand-lavender/20"
          >
            <Download className="w-10 h-10 text-brand-lavender" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black tracking-tight"
          >
            Author <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lavender to-brand-purple">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-400 font-medium"
          >
            Download the latest templates and guides needed for a successful publication in Transactions on Emerging Engineering.
          </motion.p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {resources.map((item, idx) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              className="group p-8 bg-slate-50 border border-slate-100 rounded-[40px] hover:bg-white hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-purple mb-8 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">{item.description}</p>
              
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-200">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Version</p>
                  <p className="font-bold text-slate-900">{item.version}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Size</p>
                  <p className="font-bold text-slate-900">{item.size}</p>
                </div>
              </div>

              <Button className="w-full bg-slate-900 hover:bg-brand-purple text-white rounded-2xl h-14 font-black text-xs tracking-widest uppercase transition-all gap-2">
                Download Now <Download className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Requirements Box */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 bg-brand-purple rounded-[40px] md:rounded-[60px] p-8 md:p-20 text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none">Pre-submission <br />Checklist</h2>
              <div className="space-y-6">
                {[
                  "Ensure all figures are high-resolution (300 DPI)",
                  "Remove all author identity for double-blind review",
                  "Include ORCID IDs for all contributing authors",
                  "Verify all references follow the Harvard style"
                ].map(check => (
                  <div key={check} className="flex items-center gap-4 text-lg font-bold text-brand-lavender/90">
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-white" />
                    {check}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 md:p-12 space-y-8">
              <h4 className="text-xl font-bold italic tracking-tight">"Following our templates correctly can speed up your review process by up to 30%."</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full" />
                <div>
                  <p className="font-black text-white">Editorial Board</p>
                  <p className="text-sm text-brand-lavender font-bold">TEE Publication</p>
                </div>
              </div>
              <Button className="w-full bg-white text-brand-purple hover:bg-slate-50 rounded-2xl h-14 font-black text-xs tracking-widest uppercase transition-all shadow-2xl">
                Submit Your Paper <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
