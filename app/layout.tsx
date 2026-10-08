import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const title = "Mohamed Khaled Eid | Data Analyst & Data Science Enthusiast";
const description = "Portfolio of Mohamed Khaled Eid — focused on Data Analytics, Data Science, SQL, Python, Machine Learning, Business Intelligence, and practical data-driven solutions.";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.vercel.app"),
  title, description, icons: { icon: "/icon.svg" },
  openGraph: { title, description, type: "website", images: ["/photo.png"] },
  twitter: { card: "summary", title, description, images: ["/photo.png"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.role, sameAs: [profile.linkedin] };
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.theme==='light')document.documentElement.classList.remove('dark')}catch(e){}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /></head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
