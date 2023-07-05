import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import { Seo } from "../components/seo";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);
  return (
    <>
      <Layout>
        <main className="page">
          <section className="tags-page">
            {newTags.map((tag, index) => {
              const [text, val] = tag;
              const tagSlug = slugify(text, { lower: true });
              return (
                <Link key={index} to={`/tags/${tagSlug}`} className="tag">
                  <h5>{text}</h5>
                  <p>{val} recipe</p>
                </Link>
              );
            })}
          </section>
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
export const Head = () => <Seo title="Tags" />;
