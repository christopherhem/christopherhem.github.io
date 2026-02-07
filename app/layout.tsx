import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christopher Hem | Full-Stack Developer",
  description: "Full-Stack Developer portfolio showcasing projects in React, Python, FastAPI, and more.",
  keywords: ["Full-Stack Developer", "React", "Python", "FastAPI", "JavaScript", "Portfolio"],
  authors: [{ name: "Christopher Hem" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Christopher Hem | Full-Stack Developer",
    description: "Full-Stack Developer portfolio showcasing projects in React, Python, FastAPI, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
