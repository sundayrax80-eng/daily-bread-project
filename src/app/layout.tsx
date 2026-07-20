import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteSettings } from "@/content/site";
import "./globals.css";

const serif = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.url),
  title: {
    default: "The Daily Bread Project | Restoring Dignity and Hope",
    template: "%s | The Daily Bread Project",
  },
  description: siteSettings.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Daily Bread Project | Restoring Dignity and Hope",
    description: siteSettings.description,
    url: siteSettings.url,
    siteName: siteSettings.name,
    images: [
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "The Daily Bread Project",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daily Bread Project | Restoring Dignity and Hope",
    description: siteSettings.description,
    images: ["/images/social-preview.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteSettings.name,
    url: siteSettings.url,
    description: siteSettings.description,
    address: { "@type": "PostalAddress", addressLocality: "Houston", addressRegion: "TX", addressCountry: "US" },
    areaServed: "Nigeria-focused communities, surrounding villages, and nearby outreach areas",
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
