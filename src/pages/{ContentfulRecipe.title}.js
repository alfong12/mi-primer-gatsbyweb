import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";
import slugify from "slugify";

const RecipeTemplate = ({ data }) => {
  const {
    title,
    servings,
    prepTime,
    cookTime,
    image,
    content,
    description: { description },
  } = data.contentfulRecipe;
  const pathImage = getImage(image);
  const { tags, ingredients, instructions, tools } = content;
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage image={pathImage} alt={title} className="about-img" />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description} </p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep Time</h5>
                  <p>{prepTime} min. </p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTime} min. </p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings} min. </p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tgas:{" "}
                {tags.map((tag, i) => {
                  const tagSlug = slugify(tag, { lower: true });

                  return (
                    <Link to={`/tags/${tagSlug}`} key={i}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          {/* Rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, i) => {
                return (
                  <div className="single-instruction">
                    <header>
                      <p>step {i + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, i) => {
                  return <p className="single-ingredient">{item}</p>;
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, i) => {
                  return <p className="single-ingredient">{item}</p>;
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($title: String = "") {
    contentfulRecipe(title: { eq: $title }) {
      title
      servings
      prepTime
      feature
      cookTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
    }
  }
`;

export default RecipeTemplate;
