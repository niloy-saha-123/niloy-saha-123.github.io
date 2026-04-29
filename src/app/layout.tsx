'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/layout/Header';
import ClientCursor from '@/components/layout/ClientCursor';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        {/* Favicon — glitchy NS (cache-bust v=2 to force refresh) */}
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png?v=3" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png?v=3" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload cursors for faster/reliable loading */}
        <link rel="preload" href="/cursor-light.svg" as="image" />
        <link rel="preload" href="/cursor-dark.svg" as="image" />

        {/* Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF2D7C" />
        <meta name="description" content="Niloy Saha - Software Developer & Data Analyst. Portfolio showcasing projects in full-stack development, AI, and machine learning." />
        <meta name="author" content="Niloy Saha" />
        <meta name="keywords" content="Niloy Saha, Software Developer, Data Analyst, Full Stack Developer, AI, Machine Learning, Dickinson College" />
        <title>Niloy Saha | Software Developer</title>

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://niloy-saha-123.github.io/" />
        <meta property="og:title" content="Niloy Saha | Software Developer & Data Analyst" />
        <meta property="og:description" content="Computer Science & Data Analytics student at Dickinson College, specializing in full-stack development, AI/ML, and building production-grade solutions." />
        <meta property="og:image" content="https://niloy-saha-123.github.io/android-chrome-512x512.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@__niloy__06" />
        <meta name="twitter:creator" content="@__niloy__06" />
        <meta name="twitter:title" content="Niloy Saha | Software Developer & Data Analyst" />
        <meta name="twitter:description" content="Computer Science & Data Analytics student at Dickinson College, specializing in full-stack development, AI/ML, and building production-grade solutions." />
        <meta name="twitter:image" content="https://niloy-saha-123.github.io/android-chrome-512x512.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Niloy Saha",
              "url": "https://niloy-saha-123.github.io/",
              "jobTitle": "Software Developer & Data Analyst",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Dickinson College"
              },
              "description": "Computer Science & Data Analytics student at Dickinson College, specializing in full-stack development, AI/ML, and building production-grade solutions.",
              "email": "sahan@dickinson.edu",
              "sameAs": [
                "https://github.com/niloy-saha-123",
                "https://www.linkedin.com/in/niloysaha24/",
                "https://www.facebook.com/niloy.24.2004/",
                "https://www.instagram.com/__niloy__06/",
                "https://x.com/__niloy__06"
              ]
            })
          }}
        />

        {/* Google Fonts - Comic Theme */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          <ClientCursor />
          <Header />
          <main className="pt-[80px] sm:pt-[100px] max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8">
            {children}
          </main>
          <footer className="text-center py-12 font-comic">
            <p className="text-base">Designed & Built by Niloy Saha © 2025</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
