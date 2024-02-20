import React, { useState } from "react";
import ThemeToggle from "./Header/themeToggle";
import Header from "./Header/Header";
import Head from "next/head";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

type LayoutProps = {
  children: React.ReactNode;
};

export const siteTitle = "Arthur Revelski";

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Arthur Revelski" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className={theme}>
        <Header />
        <main className="lg:float-right md:float-none lg:w-8/12 md:w-12/12 py-12 px-16 sm:px-24 dark:bg-zinc-900">
          <ThemeToggle config={{ theme, setTheme }} />
          {children}
        </main>
      </div>
      <GoogleTagManager gtmId="GTM-MPNWC3" />
      <GoogleAnalytics gaId="G-E1F12C8Q41" />
    </>
  );
}
