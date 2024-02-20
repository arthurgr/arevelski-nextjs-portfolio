import type { NextPage } from "next";
import Layout from "../components/layout";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import TechnicalSkills from "../components/TechinalSkills/TechnicalSkills";

const index: NextPage = () => {
  return (
    <Layout>
      <section className="max-w-xl mb-8">
        <Experience />
      </section>
      <section className="max-w-xl mb-8">
        <TechnicalSkills />
      </section>
      <section className="max-w-xl mb-8">
        <Education />
      </section>
    </Layout>
  );
};

export default index;
