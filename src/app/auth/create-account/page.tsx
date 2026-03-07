"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Lock, User, AtSign, Eye, EyeOff, Check, X } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const passwordRequirements = [
    { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
    { label: "Contains a number", test: (p: string) => /\d/.test(p) },
    { label: "Contains a special character", test: (p: string) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
    { label: "Contains uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  ];

  const calculateStrength = () => {
    return passwordRequirements.filter(req => req.test(password)).length;
  };

  const strength = calculateStrength();
  const strengthColor = strength <= 1 ? "bg-red-500" : strength <= 3 ? "bg-yellow-500" : "bg-green-500";
  const strengthText = strength <= 1 ? "Weak" : strength <= 3 ? "Medium" : "Strong";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Password Validation
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    if (strength < 3) {
      toast.error("Please provide a stronger password");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      toast.success("Account created successfully!");

      // Automatically sign in the user after creation
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Account created, but could not sign in automatically. Please sign in manually.");
        router.push("/auth/signin");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-950 relative overflow-hidden">
      {/* Left Side: Modern Library & Branding */}
      <div className="hidden lg:flex relative overflow-hidden border-r border-white/5">
        <Image
          src="/auth/signup-bg-new.png"
          alt="Library Background"
          fill
          className="object-cover opacity-80 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-slate-950/40 via-slate-950/70 to-slate-950" />

        <div className="relative z-20 flex flex-col justify-between p-16 w-full h-full text-white">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full p-0.5 shadow-2xl">
              <Image
                src="/logo-tee.jpg"
                alt="TEE Logo"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-2xl font-black tracking-widest uppercase">TEE</span>
          </Link>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl font-black tracking-tighter leading-none"
            >
              Start Your <br /> <span className="text-brand-lavender">Research</span> <br /> Legacy.
            </motion.h2>
            <p className="max-w-md text-lg text-slate-400 font-medium leading-relaxed">
              Join thousands of researchers worldwide. Publish your work in high-impact engineering journals and advance the boundaries of human knowledge.
            </p>
          </div>

          <div className="flex items-center gap-8 text-[11px] font-black tracking-[0.2em] text-white/40 uppercase">
            <span>PEER REVIEWED</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <span>GLOBAL REACH</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <span>OPEN ACCESS</span>
          </div>
        </div>
      </div>

      {/* Right Side: Sign Up Form */}
      <div className="flex justify-center p-6 pt-40 lg:pt-48 pb-24 relative overflow-hidden bg-slate-950">
        <div className="absolute top-0 -left-20 w-80 h-80 bg-brand-purple/20 rounded-full blur-[120px] lg:hidden" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl shadow-brand-purple/5">
            <div className="text-center space-y-3 mb-8 text-white">
              <h1 className="text-4xl font-black tracking-tight">Join TEE</h1>
              <p className="text-slate-400 font-medium text-sm">Create your researcher account today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-white">
              <div className="space-y-2">
                <Label className="text-xs font-black uppercase tracking-[0.2em] text-brand-lavender opacity-70 ml-1">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 h-13 pl-12 rounded-2xl text-white placeholder:text-slate-600 focus:ring-brand-lavender focus:border-brand-lavender transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-black uppercase tracking-[0.2em] text-brand-lavender opacity-70 ml-1">Email Address</Label>
                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    className="bg-white/5 border-white/10 h-13 pl-12 rounded-2xl text-white placeholder:text-slate-600 focus:ring-brand-lavender focus:border-brand-lavender transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-black uppercase tracking-[0.2em] text-brand-lavender opacity-70 ml-1">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-white/5 border-white/10 h-13 pl-12 pr-12 rounded-2xl text-white placeholder:text-slate-600 focus:ring-brand-lavender focus:border-brand-lavender transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-brand-lavender transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {password.length > 0 && (
                  <div className="mt-2 space-y-2 px-1">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-slate-500">Security Level:</span>
                      <span className={strength <= 1 ? "text-red-500" : strength <= 3 ? "text-yellow-500" : "text-green-500"}>
                        {strengthText}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-full flex-1 rounded-full transition-all duration-500 ${strength >= i ? strengthColor : "bg-white/10"
                            }`}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-y-1 mt-2">
                      {passwordRequirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          {req.test(password) ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <div className="w-3 h-3 rounded-full border border-white/20" />
                          )}
                          <span className={`text-[9px] font-medium ${req.test(password) ? "text-green-500/70" : "text-slate-500"}`}>
                            {req.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-black uppercase tracking-[0.2em] text-brand-lavender opacity-70 ml-1">Retype Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-white/5 border-white/10 h-13 pl-12 pr-12 rounded-2xl text-white placeholder:text-slate-600 focus:ring-brand-lavender focus:border-brand-lavender transition-all"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-brand-lavender transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {confirmPassword.length > 0 && password !== confirmPassword && (
                  <p className="text-[10px] text-red-500 font-bold ml-1">Passwords do not match</p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x h-14 rounded-2xl font-black text-xs tracking-[0.2em] uppercase shadow-xl shadow-brand-purple/20 group"
                >
                  {loading ? "Creating Account..." : (
                    <span className="flex items-center gap-2">
                      Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500 font-medium">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-brand-lavender font-black hover:underline underline-offset-4 tracking-tight">Sign In</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
