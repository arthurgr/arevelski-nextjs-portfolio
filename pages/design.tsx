import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Design() {
  return (
    <Layout>
      <Head>
        <title>Design Examples</title>
      </Head>
      <main>
        <section>
          <h1 className="mt-12 text-lg font-bold text-blue-500">
            Design Examples
          </h1>
          <h3 className="mt-3 text-sm font-bold text-gray-700">
            Lead UI Engineer
          </h3>
          <h3 className="text-sm font-semibold text-gray-600">
            ManagedMethods Inc
          </h3>
          <h3 className="text-sm font-normal text-gray-500">Boulder, CO</h3>
          <h3 className="text-sm font-normal text-gray-500">
            July 2021 - Present
          </h3>
          <p className="text-sm font-light text-gray-500 mt-1">Update this.</p>
        </section>
      </main>
    </Layout>
  );
}
