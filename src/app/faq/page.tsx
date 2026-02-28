"use client";

import { motion } from "framer-motion";
import { HelpCircle, Plus, Minus, Search, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is the scope of Transactions on Emerging Engineering (TEE)?",
        a: "TEE focuses on interdisciplinary engineering research, including Civil, Mechanical, Electrical, and cutting-edge fields like AI, IoT, and Sustainable Technologies. We aim to bridge the gap between theoretical research and practical engineering solutions."
      },
      {
        q: "Is there an article processing charge (APC)?",
        a: "TEE is currently an open-access journal supported by university grants, meaning there is no publishing fee for authors at this time. We believe in democratizing access to high-quality engineering research."
      }
    ]
  },
  {
    category: "Submission",
    questions: [
      {
        q: "How long does the peer review process take?",
        a: "Our typical timeline is 6-8 weeks from submission to final decision. This includes initial screening (1 week), peer review (3-5 weeks), and editorial deliberation (2 weeks)."
      },
      {
        q: "Do you accept reviews or survey papers?",
        a: "Yes, we welcome high-quality systematic reviews and meta-analyses that provide significant insights or future directions for specific engineering domains."
      }
    ]
  },
  {
    category: "Indexing",
    questions: [
      {
        q: "Where is the journal indexed?",
        a: "TEE is currently indexed in Google Scholar, Crossref, and several regional academic databases. We are in the process of application for Scopus and Web of Science (ESCI) indexing."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("General-0");
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-purple text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(203,180,212,0.2),transparent_50%)] animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-brand-lavender text-xs font-black uppercase tracking-widest"
            >
              <HelpCircle className="w-4 h-4" /> Support Center
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9]"
            >
              Frequently Asked <br />
              <span className="text-brand-lavender">Questions.</span>
            </motion.h1>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-xl group"
            >
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-lavender opacity-50 group-focus-within:opacity-100 transition-opacity" />
              <Input 
                placeholder="Search for answers..."
                className="w-full h-16 pl-16 pr-8 bg-white/5 border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:bg-white/10 transition-all text-lg font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-20">
          {faqs.map((group) => (
            <div key={group.category} className="space-y-8">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-4">
                {group.category}
                <div className="h-px flex-1 bg-slate-200" />
              </h2>
              
              <div className="space-y-4">
                {group.questions.map((faq, qIdx) => {
                  const id = `${group.category}-${qIdx}`;
                  const isOpen = openIndex === id;
                  
                  return (
                    <motion.div 
                      key={id}
                      initial={false}
                      className={`overflow-hidden rounded-[32px] border transition-all duration-500 ${
                        isOpen ? "bg-white border-brand-lavender shadow-2xl shadow-brand-purple/5" : "bg-white border-slate-100"
                      }`}
                    >
                      <button 
                        onClick={() => toggle(id)}
                        className="w-full px-8 py-8 flex items-center justify-between text-left group"
                      >
                        <span className={`text-xl font-black tracking-tight transition-colors ${
                          isOpen ? "text-brand-purple" : "text-slate-900 group-hover:text-brand-purple"
                        }`}>
                          {faq.q}
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isOpen ? "bg-brand-purple text-white rotate-0" : "bg-slate-100 text-slate-400 rotate-90"
                        }`}>
                          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </button>
                      
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: isOpen ? "auto" : 0 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="px-8 pb-8"
                      >
                        <div className="pt-4 border-t border-slate-50">
                          <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-slate-950 rounded-[40px] text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-transparent" />
          <MessageSquare className="w-16 h-16 text-brand-lavender mx-auto relative z-10" />
          <div className="space-y-4 relative z-10">
            <h3 className="text-3xl font-black text-white">Still have questions?</h3>
            <p className="max-w-md mx-auto text-slate-400 font-medium">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          </div>
          <div className="pt-4 relative z-10">
            <Button className="bg-white text-slate-900 hover:bg-brand-lavender transition-all rounded-full h-16 px-10 font-black text-xs tracking-widest uppercase group">
              Contact Support <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
