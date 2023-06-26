import React from "react";
import Galery from "../examples/Galery";
import Layout from "../components/Layout";
// import { graphql } from "gatsby";

const Testing = () => {
  return (
    <Layout>
      <main className="page">
        <Galery />
      </main>
    </Layout>
  );
};

export default Testing;
