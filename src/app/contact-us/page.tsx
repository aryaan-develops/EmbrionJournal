"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, ArrowRight, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(203,180,212,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tight tracking-tighter leading-none">
              Let's start <br />
              <span className="text-brand-lavender">a Conversation.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium">Have a question about submission, indexing, or collaboration? Our editorial team is here to help.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Contact Details</h3>
                <div className="h-px w-20 bg-brand-purple" />
              </div>

              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Email Us</p>
                    <p className="text-xl font-black text-slate-900">groupembrion@gmail.com</p>
                    <p className="text-slate-500 font-medium text-sm">Response time: within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Office Location</p>
                    <p className="text-xl font-black text-slate-900">Jamshedpur, Adityapur,</p>
                    <p className="text-slate-500 font-medium text-sm">Jharkhand, India – 831001</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Social Presence</p>
                    <div className="flex gap-4">
                       {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                          <a key={social} href="#" className="text-lg font-black text-slate-900 hover:text-brand-purple transition-colors underline underline-offset-4 decoration-2 decoration-brand-lavender/50">
                            {social}
                          </a>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-brand-purple rounded-[40px] text-white space-y-6 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <MessageSquare className="w-32 h-32" />
               </div>
               <h4 className="text-2xl font-black italic tracking-tight relative z-10">"We are committed to transparent academic communication."</h4>
               <div className="pt-4 border-t border-white/20 relative z-10">
                  <p className="font-black">Editor-in-Chief</p>
                  <p className="text-brand-lavender text-sm font-bold">Transactions on Emerging Engineering</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[50px] p-8 md:p-16 shadow-2xl shadow-brand-purple/5 border border-slate-100"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</Label>
                    <div className="relative">
                       <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                       <Input placeholder="John Doe" className="h-16 pl-12 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all font-bold" required />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</Label>
                    <div className="relative">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                       <Input type="email" placeholder="name@domain.com" className="h-16 pl-12 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all font-bold" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Department / Organization</Label>
                  <Input placeholder="E.g. Computer Science Dept, Stanford University" className="h-16 px-6 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all font-bold" />
                </div>

                <div className="space-y-4">
                  <Label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</Label>
                  <Textarea 
                    placeholder="Tell us how we can help you..." 
                    className="min-h-[200px] p-6 rounded-[30px] border-slate-100 bg-slate-50 focus:bg-white transition-all font-bold resize-none" 
                    required 
                  />
                </div>

                <Button 
                  disabled={loading}
                  className="w-full md:w-auto px-12 h-20 bg-brand-purple text-white hover:bg-slate-900 rounded-[28px] font-black text-sm tracking-[0.2em] uppercase transition-all shadow-xl shadow-brand-purple/20 group"
                >
                  {loading ? "Sending..." : (
                    <span className="flex items-center gap-3">
                      Send Message <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
