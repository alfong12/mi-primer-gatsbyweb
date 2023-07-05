import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export const Seo = ({ title, description, pathname, children }) => {
  const {
    site: {
      siteMetadata: { title: titleM, description: desctpM },
    },
  } = useStaticQuery(query);

  const metaDescription = description || desctpM;

  return (
    <>
      <html lang="es" />
      <title>{`${title} | ${titleM}`}</title>
      <meta name="description" content={metaDescription} />
      {children}
    </>
  );
};
