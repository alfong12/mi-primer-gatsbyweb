import { graphql } from "gatsby";
import React from "react";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";
import { Seo } from "../components/seo";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <Seo title="Tags">
        <main className="page">
          <h2>{pageContext.tag}</h2>
          <div className="tag-recipes">
            <RecipesList recipes={recipes} />
          </div>
        </main>
      </Seo>
    </Layout>
  );
};

export const query = graphql`
  query ($tag: String) {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export default TagTemplate;
