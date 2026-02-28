"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  BookOpen,
  IdCard,
  ArrowUpRight,
  TrendingUp,
  Files,
  DownloadCloud
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-white overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center bg-slate-950 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
          >
            <source src="/bg-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90" />
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] drop-shadow-2xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Transactions on
            </span>
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
              Emerging Engineering (TEE)
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-4xl font-light tracking-wide leading-relaxed italic">
            A simple and reliable platform for students, researchers, and academicians to share
            innovative ideas, technical knowledge, and quality research work.
          </p>

          <div className="mt-16 flex flex-col sm:flex-row items-center gap-8">
            <Button size="lg" asChild className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-12 h-16 text-base font-bold tracking-widest shadow-2xl shadow-blue-500/40 transition-all duration-500">
              <Link href="/submit">Submit Paper</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 backdrop-blur-2xl px-12 h-16 text-base font-bold tracking-widest shadow-2xl transition-all duration-500">
              <Link href="/feed">Call for Paper</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & STATS SECTION */}
      <section className="py-24 px-6 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">About Embrion Publication</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Embrion Publication</strong> is an emerging online journal platform
              dedicated to publishing research work in the field of Engineering.
              The journal provides a supportive academic space for students, researchers,
              and academicians to share innovative ideas, technical knowledge, and practical research outcomes.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Our publication focuses exclusively on Engineering disciplines including
              Mechanical Engineering, Computer Science Engineering, Electrical Engineering,
              Electronics and Communication Engineering, Civil Engineering, and other related branches.
              Embrion Publication aims to encourage early-stage researchers and institutions
              by offering a simple, transparent, and reliable publishing platform.
            </p>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-500 text-sm">
              "We welcome original research articles, review papers, and project-based studies
              that contribute to academic growth and real-world engineering solutions."
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Established Years", value: "2+", icon: TrendingUp },
              { label: "Articles Published", value: "200+", icon: Files },
              { label: "Article Views / Downloads", value: "500+", icon: DownloadCloud, span: "col-span-full" },
            ].map((stat) => (
              <div key={stat.label} className={`p-8 bg-blue-50/50 rounded-3xl border border-blue-100 text-center space-y-3 hover:translate-y-[-8px] transition-all duration-300 ${stat.span || ""}`}>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <stat.icon className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="text-4xl font-extrabold text-blue-600">{stat.value}</h3>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURE SECTION (Cards) */}
      <section className="w-full py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "ISSN", title: "ISSN", desc: "Official journal identification and online ISSN registration details.", icon: IdCard },
              { id: "Editorial", title: "Editorial Board", desc: "Renowned academicians and subject experts across engineering fields.", icon: Users },
              { id: "Publication", title: "Paper Publication", desc: "Ethical, transparent, and fast publication workflow.", icon: FileText },
              { id: "Articles", title: "Latest Articles", desc: "Browse newly published innovative research articles.", icon: BookOpen },
            ].map((feature) => (
              <Link key={feature.id} href="#" className="group relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-blue-400/50 hover:bg-white/10 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-400/40 transition-all" />

                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{feature.desc}</p>

                <div className="mt-auto flex items-center text-blue-400 font-bold text-xs tracking-widest group-hover:gap-2 transition-all">
                  LEARN MORE <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.35; transform: scale(1.05); }
          50% { opacity: 0.45; transform: scale(1.08); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
