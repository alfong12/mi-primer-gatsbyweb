import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const Contacts = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Adaptogen grailed bicycle rights put a bird on it. Heirloom
              butcher la croix authentic small batch, slow-carb next level vice
              sartorial direct trade chia cred put a bird on it fanny pack
              hammock
            </p>
            <p>
              Hoodie leggings raclette, snackwave squid selvage paleo small
              batch poutine next level copper mug PBR&B distillery actually.
            </p>
            <p>
              Polaroid pabst direct trade tumblr stumptown actually. Squid vinyl
              authentic ascot blackbird spyplane retro fashion axe mumblecore.{" "}
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xqkvkkyv"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                {" "}
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>look at this Awesomesauce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { feature: { eq: true } }
    ) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Contacts;
