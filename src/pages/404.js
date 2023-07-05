import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/seo";

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
        </section>
      </main>
    </Layout>
  );
};

export default Error;

export const Head = () => <Seo title="Error" />;
