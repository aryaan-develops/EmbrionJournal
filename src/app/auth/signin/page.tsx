"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Github, Mail, ArrowRight, Lock, User } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Welcome back!");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-950 relative overflow-hidden">
      {/* Left Side: Dynamic Branding & Image */}
      <div className="hidden lg:flex relative overflow-hidden border-r border-white/5">
        <Image 
          src="/auth/signin-bg.png" 
          alt="Research Background" 
          fill
          className="object-cover opacity-60 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="relative z-20 flex flex-col justify-between p-16 w-full h-full text-white">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full p-0.5 shadow-2xl">
              <Image 
                src="/logo-image.jpeg" 
                alt="Logo" 
                width={48} 
                height={48} 
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-2xl font-black tracking-widest uppercase">Embrion</span>
          </Link>

          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl font-black tracking-tighter leading-none"
            >
              Advancing <br /> <span className="text-brand-lavender">Engineering</span> <br /> Excellence.
            </motion.h2>
            <p className="max-w-md text-lg text-slate-400 font-medium leading-relaxed">
              Access your personal dashboard to manage publications, review manuscripts, and track your research journey.
            </p>
          </div>

          <div className="flex items-center gap-8 text-[11px] font-black tracking-[0.2em] text-white/40 uppercase">
            <span>© 2024 EMBRION JOURNAL</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <span>OPEN ACCESS PLATFORM</span>
          </div>
        </div>
      </div>

      {/* Right Side: Sign In Form */}
      <div className="flex justify-center p-6 pt-40 lg:pt-48 pb-24 relative overflow-hidden bg-slate-950">
        <div className="absolute top-0 -left-20 w-80 h-80 bg-brand-purple/20 rounded-full blur-[120px] lg:hidden" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-brand-purple/5">
            <div className="text-center space-y-3 mb-10 text-white">
              <h1 className="text-4xl font-black tracking-tight">Welcome Back</h1>
              <p className="text-slate-400 font-medium">Connect to your account to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-white">
              <div className="space-y-2">
                <Label className="text-xs font-black uppercase tracking-[0.2em] text-brand-lavender opacity-70 ml-1">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    className="bg-white/5 border-white/10 h-14 pl-12 rounded-2xl text-white placeholder:text-slate-600 focus:ring-brand-lavender focus:border-brand-lavender transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <Label className="text-xs font-black uppercase tracking-[0.2em] text-brand-lavender opacity-70">Password</Label>
                  <Link href="#" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-brand-lavender transition-colors">Forgot?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-white/5 border-white/10 h-14 pl-12 rounded-2xl text-white placeholder:text-slate-600 focus:ring-brand-lavender focus:border-brand-lavender transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x h-14 rounded-2xl font-black text-xs tracking-[0.2em] uppercase shadow-xl shadow-brand-purple/20 group"
              >
                {loading ? "Authenticating..." : (
                  <span className="flex items-center gap-2">
                    Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/5"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#020617] px-4 text-slate-500 font-bold tracking-widest">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => signIn("google")}
                className="h-14 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all font-bold gap-3"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-white uppercase tracking-widest text-[10px] font-black">Google Account</span>
              </Button>
            </div>

            <p className="mt-10 text-center text-sm text-slate-500 font-bold">
              Don&apos;t have an account?{" "}
              <Link href="/auth/create-account" className="text-brand-lavender font-black hover:underline underline-offset-4 tracking-tight">Create Account</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
