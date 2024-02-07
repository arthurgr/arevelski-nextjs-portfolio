import Head from "next/head";
import Link from "next/link";
import Header from "./header";
import ThemeToggle from "./themeToggle";
import { useState } from "react";

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
    <div className={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Arthur Revelski Portfolio Website" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <div
        id="content"
        className="lg:w-8/12 md:w-12/12 px-16 sm:px-24 py-12 float-right dark:bg-zinc-900"
      >
        <ThemeToggle config={{ theme, setTheme }} />
        {children}
      </div>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
