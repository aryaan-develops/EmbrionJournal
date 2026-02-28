import Link from "next/link";
import Image from "next/image"; // Added Image import
import { Mail, MapPin, Instagram, Send, ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 text-white overflow-hidden pt-20 pb-10">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Logo & Intro */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        {/* Replaced MB placeholder with Image component */}
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-0.5 shadow-lg overflow-hidden">
                            <Image
                                src="/logo-image.jpeg"
                                alt="Embrion Logo"
                                width={40} // Adjusted width to match original div size (w-10 = 40px)
                                height={40} // Adjusted height to match original div size (h-10 = 40px)
                                className="object-cover rounded-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight">Embrion</span>
                            <span className="text-[10px] text-indigo-400 font-bold tracking-[0.2em]">PUBLICATION</span>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Empowering early-stage researchers by offering a simple, transparent, and reliable publishing platform for Engineering disciplines.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                            <Send className="w-5 h-5" />
                        </a>
                        <a href="mailto:groupembrion@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold border-b border-white/10 pb-2 inline-block pr-8">Contact Information</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-sm text-gray-400">
                            <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                            <span>Jamshedpur, Adityapur, India – 831001</span>
                        </li>
                        <li className="flex gap-3 text-sm text-gray-400">
                            <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                            <a href="mailto:groupembrion@gmail.com" className="hover:text-blue-400 transition-all">
                                Paper Submission: groupembrion@gmail.com
                            </a>
                        </li>
                        <li className="flex gap-3 text-sm text-gray-400">
                            <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                            <a href="mailto:groupembrion@gmail.com" className="hover:text-blue-400 transition-all">
                                Contact Editor: groupembrion@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold border-b border-white/10 pb-2 inline-block pr-8">Useful Links</h4>
                    <ul className="space-y-3">
                        <li key="Home"><Link href="/" className="text-sm text-gray-400 hover:text-blue-400 transition-all">Home</Link></li>
                        <li key="Submit"><Link href="/submit" className="text-sm text-gray-400 hover:text-blue-400 transition-all">Submit Paper</Link></li>
                        <li key="About"><Link href="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-all">About Journal</Link></li>
                        <li key="Contact"><Link href="/contact-us" className="text-sm text-gray-400 hover:text-blue-400 transition-all">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold border-b border-white/10 pb-2 inline-block pr-8">Our Services</h4>
                    <ul className="space-y-3">
                        {["View / Download Paper", "Download Certificate", "FAQs", "Impact Factor", "Google Scholar / Indexing"].map((link) => (
                            <li key={link}>
                                <Link href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-all flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-20 border-t border-white/5 pt-8 text-center text-xs text-gray-500">
                <p>© 2026 Embrion Publication. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
