import type { NextPage } from "next";
import Layout from "../components/layout";
import Experience from "../components/resume/Experience/Experience";
import Education from "../components/resume/Education";
import Skills from "../components/resume/Skills/Skills";
import { GoogleAnalytics } from '@next/third-parties/google'

const index: NextPage = () => {
  return (
    <Layout home>
        <article>
            <section>
                <Experience/>
            </section>
            <section>
                <Skills/>
            </section>
            <section>
                <Education/>
            </section>
        </article>
        <GoogleAnalytics gaId="G-E1F12C8Q41"/>
    </Layout>
  );
};

export default index;
