import React, { useState } from "react";
import Head from "next/head";
import Header from "./Header/Header";
import ThemeToggle from "./themeToggle";

export const siteTitle = "Arthur Revelski";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const [theme, setTheme] = useState("light");
  return (
    <>
        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="description" content="Arthur Revelski"/>
            <meta name="og:title" content={siteTitle}/>
        </Head>
        <div className={theme}>
            <Header/>
            <main
              id="content"
              className=" float-right lg:w-8/12 md:w-12/12 py-12 px-16 sm:px-24 dark:bg-zinc-900"
            >
                  <ThemeToggle config={{ theme, setTheme }} />
                  {children}
            </main>
        </div>
    </>
  );
}
