import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import { nav } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: "Forward Coaching", template: "%s | Forward Coaching" },
  description: "Practical life coaching for clarity, accountability, habits, career transitions, and personal growth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <header className="site-header glass glass-strong">
          <Link className="brand" href="/" aria-label="Forward Coaching home">
            <span className="brand-mark">F</span>
            <span>FORWARD <small>COACHING</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <Link className="button button-dark button-small" href="/book">Book a call</Link>
        </header>
        {children}
        <footer className="site-footer glass glass-strong">
          <div>
            <p className="eyebrow">FORWARD COACHING</p>
            <h2>Bring the situation you&apos;re facing. We&apos;ll start there.</h2>
          </div>
          <div className="footer-links">
            <Link href="/services">Coaching</Link><Link href="/resources">Resources</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link>
            <Link href="/disclaimer">Coaching disclaimer</Link>
          </div>
          <p className="fine-print">Coaching supports personal development, goal setting, accountability, and decision-making. It is not therapy, medical care, psychiatric treatment, legal advice, financial advice, or crisis care.</p>
        </footer>
      </body>
    </html>
  );
}
