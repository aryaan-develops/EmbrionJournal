import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default: "Transactions on Emerging Engineering (TEE) | Research & Engineering Journal",
    template: "%s | TEE Journal",
  },
  description: "A professional platform for academic journal submission and discovery in emerging engineering fields including AI, IoT, and sustainable technologies.",
  keywords: [
    "Engineering Journal",
    "Research Paper Submission",
    "Emerging Engineering",
    "Double-Blind Peer Review",
    "AI Research",
    "Sustainable Engineering",
    "Academic Journal",
    "TEE Journal",
  ],
  authors: [{ name: "TEE Editorial Board" }],
  creator: "TEE Journal",
  publisher: "Transactions on Emerging Engineering",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tee-journal.com",
    siteName: "Transactions on Emerging Engineering",
    title: "Transactions on Emerging Engineering (TEE) | Research & Engineering Journal",
    description: "Submit and discover high-quality research in emerging engineering technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TEE Journal - Research & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transactions on Emerging Engineering (TEE)",
    description: "Leading professional platform for engineering research and academic discovery.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  );
}
