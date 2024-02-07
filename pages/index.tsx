import type { NextPage } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Experience from "../components/resume/Experience/Experience";
import Education from "../components/resume/Education";
import Skills from "../components/resume/Skills/Skills";
import Links from "../components/Links/Links";


const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Arthur Revelski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Experience />
        <Education />
        <Skills />
        <div className="text-blue-500 dark:text-blue-300">
          <h1 className="mt-12 text-lg font-bold">Contact</h1>
          <Links />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
