import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Abhinav Kumar | Full Stack & AI Developer",
  description:
    "Portfolio of Abhinav Kumar — Full Stack & AI Developer, B.Tech in IT & Mathematical Innovation at Cluster Innovation Centre, University of Delhi. Building AI agents, modern web architectures, and scalable full-stack products.",
  keywords: [
    "Abhinav Kumar",
    "Portfolio",
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "React",
    "Python",
    "Cluster Innovation Centre",
    "Delhi University",
    "Software Engineer",
  ],
  authors: [{ name: "Abhinav Kumar", url: "https://github.com/abhikumar3584" }],
  icons: {
    icon: "/profile1.jpeg",
  },
  openGraph: {
    title: "Abhinav Kumar | Full Stack & AI Developer",
    description:
      "Minimalist developer portfolio and digital resume of Abhinav Kumar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
