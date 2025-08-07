import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/lib/theme/theme-script";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google';
import { searchCharacters } from "./actions";
import NewSidebar from "@/components/new-sidebar";
import IconStyleInitializer from "@/components/icon-style-onmount";
import AuthProvider from "@/components/auth-provider";
import { ConditionalAdsense } from "@/components/conditional-adsense";
import { auth } from "@/server/auth";
import { PostHogProvider } from "@/components/PostHogProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chara",
  description: "Chat with anyone you imagine — private, powerful, and customizable.",
  openGraph: {
    title: "Chara - Chat with anyone you imagine",
    description: "Chat with anyone you imagine — private, powerful, and customizable.",
    url: "https://chara-research.com",
    siteName: "chara-research.com",
    images: [
      {
        url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlOR1NnGW-QpBq02chXSy5b7xo3Y0FWCuSwA53-rPohpxZ1ptqfeFldN4CrtGLp9reaIcabjcVwFNHFYBaRMtBADpT5tCqzuJA6k-tfI8K9lvVlzpUXyGd2tllXE8ITNL-uGj1Lpyl1y4WtYsZrWryPpDNBwPcA12ghkHuvhW14x943_QQygaUTGQI-mBD/w945-h600-p-k-no-nu/20250806_163637.png",
        width: 945,
        height: 600,
        alt: "Chara Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chara - AI Characters Redefined",
    description: "Chat with anyone you imagine — private, powerful, and customizable.",
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlOR1NnGW-QpBq02chXSy5b7xo3Y0FWCuSwA53-rPohpxZ1ptqfeFldN4CrtGLp9reaIcabjcVwFNHFYBaRMtBADpT5tCqzuJA6k-tfI8K9lvVlzpUXyGd2tllXE8ITNL-uGj1Lpyl1y4WtYsZrWryPpDNBwPcA12ghkHuvhW14x943_QQygaUTGQI-mBD/w945-h600-p-k-no-nu/20250806_163637.png",
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  const isPro = await isUserPro(session?.user?.id);

  async function search(query: string) {
    'use server';
    const characters = await searchCharacters(query, 30);
    return characters;
  }

  return (
    <AuthProvider>
      <html lang="en" className="dark">
        <head>
          <ThemeScript />
          <link
            rel="icon"
            href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlOR1NnGW-QpBq02chXSy5b7xo3Y0FWCuSwA53-rPohpxZ1ptqfeFldN4CrtGLp9reaIcabjcVwFNHFYBaRMtBADpT5tCqzuJA6k-tfI8K9lvVlzpUXyGd2tllXE8ITNL-uGj1Lpyl1y4WtYsZrWryPpDNBwPcA12ghkHuvhW14x943_QQygaUTGQI-mBD/w945-h600-p-k-no-nu/20250806_163637.png"
            sizes="any"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </head>
        <body className={`${inter.className} bg-neutral-900`}>
          <PostHogProvider>
            <IconStyleInitializer />
            <NewSidebar search={search} />
            <div className="flex flex-col min-h-screen pt-12">
              <main className="flex-1">
                {children}
              </main>
            </div>
          </PostHogProvider>
          <Toaster />
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID ?? ""} />
        </body>
      </html>
    </AuthProvider>
  );
}
