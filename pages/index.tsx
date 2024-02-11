import type { NextPage } from "next";
import Layout from "../components/layout";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import TechnicalSkills from "../components/TechinalSkills/TechnicalSkills";
import { GoogleAnalytics } from '@next/third-parties/google'

const index: NextPage = () => {
  return (
    <Layout home>
        <section className="max-w-xl mb-8">
            <Experience/>
        </section>
        <section className="max-w-xl mb-8">
        <TechnicalSkills/>
        </section>
        <section className="max-w-xl mb-8">
            <Education/>
        </section>
        <GoogleAnalytics gaId="G-E1F12C8Q41"/>
    </Layout>
  );
};

export default index;
