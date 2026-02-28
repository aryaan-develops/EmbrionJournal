"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
    ChevronDown, 
    Target, 
    Eye, 
    ShieldCheck, 
    AlertTriangle, 
    UserPlus, 
    ArrowRightCircle,
    Menu,
    X,
    ChevronRight
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { motion, AnimatePresence } from "framer-motion";

import { useSession, signOut } from "next-auth/react";

const navigation = [
    { name: "HOME", href: "/" },
    { 
        name: "ABOUT", 
        href: "/about",
        dropdown: [
            { name: "Aim & Scope", href: "/about#aim-and-scope", icon: Target },
            { name: "Peer Review Process", href: "/about#peer-review", icon: Eye },
            { name: "Publication Ethics", href: "/about#publication-ethics", icon: ShieldCheck },
            { name: "Plagiarism Policy", href: "/about#publication-ethics", icon: AlertTriangle },
            { name: "Join as Reviewer", href: "/about#join-as-reviewer", icon: UserPlus },
        ]
    },
    { name: "FOR AUTHOR", href: "/submit" },
    { name: "ARCHIVE", href: "/feed" },
    { name: "DOWNLOAD", href: "/download" },
    { name: "FAQ", href: "/faq" },
    { name: "CONTACT US", href: "/contact-us" },
];

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    const isHome = pathname === "/";
    const isAdmin = (session?.user as any)?.role === "Admin";

    return (
        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 text-white font-sans"
        >
            <nav className={cn(
                "w-full max-w-7xl h-20 md:h-22 backdrop-blur-2xl rounded-[30px] md:rounded-[40px] flex items-center justify-between px-6 md:px-10 transition-all duration-500 overflow-hidden relative group",
                isHome 
                    ? "bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" 
                    : "bg-slate-950/90 border border-slate-800 shadow-2xl shadow-indigo-500/10"
            )}>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 group/logo">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center p-0.5 shadow-xl overflow-hidden transform group-hover/logo:scale-110 group-hover/logo:rotate-3 transition-all duration-500">
                            <Image 
                                src="/logo-image.jpeg" 
                                alt="Embrion Logo" 
                                width={56} 
                                height={56} 
                                className="object-cover rounded-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-lg md:text-2xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-brand-lavender via-white to-brand-lavender animate-gradient-x",
                            )}>
                                Embrion
                            </span>
                            <span className={cn(
                                "text-[8px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.25em] mt-0.5 md:mt-1 transition-all duration-500",
                                isHome ? "text-brand-lavender/60" : "text-brand-lavender/80"
                            )}>
                                PUBLICATION
                            </span>
                        </div>
                    </Link>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
                    {navigation.map((item, idx) => (
                        item.dropdown ? (
                            <DropdownMenu key={item.name}>
                                <DropdownMenuTrigger className={cn(
                                    "px-4 py-2 text-[13px] font-black tracking-widest transition-all duration-300 whitespace-nowrap outline-none flex items-center gap-2 group/trigger rounded-full relative overflow-hidden",
                                    pathname.startsWith(item.href) ? "text-brand-lavender" : "text-white hover:text-brand-lavender"
                                )}>
                                    {item.name}
                                    <ChevronDown className="w-4 h-4 group-hover/trigger:translate-y-0.5 transition-transform" />
                                    {pathname.startsWith(item.href) && (
                                        <motion.div layoutId="nav-glow" className="absolute inset-0 bg-brand-lavender/10 -z-10" />
                                    )}
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-brand-purple/95 backdrop-blur-3xl border border-white/10 rounded-[30px] p-3 mt-4 min-w-[260px] shadow-[0_20px_80px_rgba(0,0,0,0.8)] border-t-brand-lavender/50 text-white">
                                    <div className="p-2 mb-2 text-[10px] font-black tracking-[0.3em] text-brand-lavender/70 uppercase">
                                        Resources & Info
                                    </div>
                                    {item.dropdown.map((subItem) => (
                                        <DropdownMenuItem key={subItem.name} className="focus:bg-brand-lavender/20 focus:text-white rounded-2xl transition-all duration-300 py-3 px-3 cursor-pointer group/item">
                                            <Link href={subItem.href} className="flex items-center gap-4 w-full">
                                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-brand-purple group-hover/item:to-brand-lavender transition-all duration-300 shadow-lg">
                                                    {subItem.icon && <subItem.icon className="w-5 h-5 text-brand-lavender group-hover/item:text-white" />}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-black text-[13px] tracking-wide text-white group-hover/item:text-white">
                                                        {subItem.name}
                                                    </span>
                                                </div>
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                    <div className="mt-3 pt-3 border-t border-white/5">
                                        <DropdownMenuItem className="focus:bg-white/5 focus:text-white rounded-2xl transition-all duration-300 py-4 px-4 group/all">
                                            <Link href={item.href} className="w-full flex items-center justify-between">
                                                <span className="font-black text-[11px] tracking-widest text-brand-lavender uppercase italic">
                                                    View All About
                                                </span>
                                                <ArrowRightCircle className="w-5 h-5 text-brand-lavender opacity-0 group-hover/all:translate-x-1 group-hover/all:opacity-100 transition-all" />
                                            </Link>
                                        </DropdownMenuItem>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 text-[13px] font-black tracking-widest transition-all duration-300 whitespace-nowrap rounded-full relative overflow-hidden group/link",
                                    pathname === item.href
                                        ? "text-brand-lavender"
                                        : "text-white hover:text-brand-lavender"
                                )}
                            >
                                <span className="relative z-10">{item.name}</span>
                                {pathname === item.href && (
                                    <motion.div layoutId="nav-glow" className="absolute inset-0 bg-brand-lavender/10 -z-10" />
                                )}
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-lavender to-transparent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                            </Link>
                        )
                    ))}
                </div>

                <div className="flex items-center gap-3 md:gap-6">
                    {session ? (
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="hidden sm:flex text-white font-black text-xs tracking-widest hover:bg-white/5 rounded-full px-6 h-10 transition-all duration-300 uppercase" 
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </Button>
                    ) : (
                        <div className="hidden sm:flex items-center gap-3">
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-white font-black text-[10px] tracking-widest hover:bg-white/5 rounded-full px-5 h-10 transition-all duration-300 uppercase" 
                                asChild
                            >
                                <Link href="/auth/signin">Log In</Link>
                            </Button>
                            <Button 
                                size="sm" 
                                className="bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x hover:opacity-90 text-white font-black text-[10px] tracking-widest rounded-full px-6 h-10 transition-all duration-300 uppercase shadow-lg shadow-brand-purple/20" 
                                asChild
                            >
                                <Link href="/auth/create-account">Join Now</Link>
                            </Button>
                        </div>
                    )}

                    {isAdmin && (
                        <Button 
                            size="sm" 
                            className={cn(
                                "rounded-full font-black text-[10px] md:text-xs px-4 md:px-8 h-8 md:h-11 transition-all duration-500 shadow-2xl relative overflow-hidden group/admin",
                                isHome 
                                    ? "bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x hover:opacity-90 text-white shadow-brand-purple/40" 
                                    : "bg-white text-slate-900 hover:bg-slate-100 shadow-white/10"
                            )}
                            asChild
                        >
                            <Link href="/admin">
                                <span className="relative z-10 uppercase tracking-widest">Admin</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/admin:translate-x-full transition-transform duration-700" />
                            </Link>
                        </Button>
                    )}

                    {/* MOBILE MENU TOGGLE */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full w-12 h-12">
                                    <Menu className="w-7 h-7" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-brand-purple/85 backdrop-blur-3xl border-l border-white/10 w-[70%] sm:w-[300px] p-0 overflow-hidden text-white transition-transform duration-500">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <SheetDescription className="sr-only">
                                    Access the main sections and categories of the Embrion Publication platform.
                                </SheetDescription>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(203,180,212,0.2),transparent_50%)] animate-pulse" />
                                <div className="flex flex-col h-full py-8 px-6 relative z-10">
                                    <div className="mb-8 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-black text-white tracking-tighter leading-none">Embrion</span>
                                            <span className="text-[10px] text-brand-lavender font-black tracking-[0.2em] mt-1">PUBLICATION</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col space-y-1 overflow-y-auto pr-2 custom-scrollbar">
                                        {navigation.map((item, i) => (
                                            <motion.div 
                                                key={item.name}
                                                initial={{ x: 30, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                                className="flex flex-col"
                                            >
                                                {item.dropdown ? (
                                                  <div className="space-y-4 pt-4 pb-2">
                                                    <div className="text-[9px] font-black text-brand-lavender tracking-[0.3em] uppercase opacity-60 flex items-center gap-2">
                                                      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-brand-lavender/30" />
                                                      {item.name}
                                                      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-brand-lavender/30" />
                                                    </div>
                                                    <div className="flex flex-col space-y-3 pl-3 border-l border-brand-lavender/20">
                                                      {item.dropdown.map((subItem) => (
                                                        <SheetClose asChild key={subItem.name}>
                                                          <Link 
                                                            href={subItem.href}
                                                            className="flex items-center gap-3 text-xs font-bold text-white/70 hover:text-white transition-all group"
                                                          >
                                                            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-purple transition-colors border border-white/5 group-hover:border-brand-lavender/30">
                                                                {subItem.icon && <subItem.icon className="w-3.5 h-3.5 text-brand-lavender group-hover:text-white" />}
                                                            </div>
                                                            {subItem.name}
                                                          </Link>
                                                        </SheetClose>
                                                      ))}
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <SheetClose asChild>
                                                    <Link
                                                      href={item.href}
                                                      className={cn(
                                                          "text-lg font-black tracking-tight transition-all duration-300 py-2.5 flex items-center justify-between group",
                                                          pathname === item.href ? "text-brand-lavender" : "text-white hover:text-brand-lavender"
                                                      )}
                                                    >
                                                      {item.name}
                                                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-lavender" />
                                                    </Link>
                                                  </SheetClose>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-8 flex flex-col gap-3">
                                        {isAdmin && (
                                            <SheetClose asChild>
                                                <Link 
                                                    href="/admin" 
                                                    className="w-full flex items-center justify-center border border-white/10 rounded-xl h-12 text-[11px] font-black tracking-widest uppercase hover:bg-white/5 transition-all"
                                                >
                                                    Admin Panel
                                                </Link>
                                            </SheetClose>
                                        )}
                                        
                                        {session ? (
                                            <Button 
                                                onClick={() => signOut()}
                                                className="w-full bg-slate-900 border border-white/10 hover:bg-slate-800 text-white font-black rounded-xl h-12 text-[11px] tracking-widest uppercase transition-all"
                                            >
                                                LOGOUT
                                            </Button>
                                        ) : (
                                            <div className="flex flex-col gap-2">
                                                <Button className="w-full bg-gradient-to-r from-brand-purple via-brand-lavender to-brand-purple bg-[length:200%_auto] animate-gradient-x hover:opacity-90 font-black rounded-xl h-12 text-[11px] tracking-widest uppercase shadow-lg shadow-brand-purple/20" asChild>
                                                    <Link href="/auth/create-account">JOIN NOW</Link>
                                                </Button>
                                                <Button variant="ghost" className="w-full text-white/60 hover:text-white hover:bg-white/5 font-black rounded-xl h-10 text-[10px] tracking-widest uppercase transition-all" asChild>
                                                    <Link href="/auth/signin">ALREADY HAVE AN ACCOUNT? LOGIN</Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </motion.div>
    );
}
