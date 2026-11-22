import type { Metadata } from "next";
import { FONT_PRELOADS } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julie Kasparian | Front-End Developer",
  description:
    "Front-end developer portfolio: design, WordPress, React, and production sites.",
  icons: { icon: "/images/icon.png" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {FONT_PRELOADS.map((font) => (
          <link
            key={font.href}
            rel="preload"
            href={font.href}
            as="font"
            type={font.type}
            crossOrigin="anonymous"
          />
        ))}
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}