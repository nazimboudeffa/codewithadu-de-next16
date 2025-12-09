import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageSelectorWrapper from "./components/LanguageSelectorWrapper";
import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code with a Dude",
  description: "Take your app easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlausibleProvider domain="codewithadu.de" customDomain="https://plausible.codewithadu.de">
        <LanguageProvider>
          <LanguageSelectorWrapper />
          {children}
        </LanguageProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
