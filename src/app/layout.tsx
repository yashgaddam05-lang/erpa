import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ERPA | Workday, AWS & PeopleSoft Consulting Services",
    template: "%s | ERPA",
  },
  description:
    "ERPA delivers enterprise application management, cloud hosting, and consulting services for Workday, AWS, and PeopleSoft. 25+ years, 1,100+ organizations served.",
  keywords: [
    "Workday consulting",
    "PeopleSoft managed services",
    "AWS cloud migration",
    "ERP consulting",
    "Workday implementation",
    "enterprise application management",
    "higher education ERP",
    "government ERP solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ERPA",
    title: "ERPA | Workday, AWS & PeopleSoft Consulting Services",
    description:
      "Leading enterprise application management and consulting services. 25+ years, 1,100+ organizations served.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
