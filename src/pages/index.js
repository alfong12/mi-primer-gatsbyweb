import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import { Seo } from "../components/seo";

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            class="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluss, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
}

export const Head = () => (
  <Seo title="home" description="this is the home page" />
);
