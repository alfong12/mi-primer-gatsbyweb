import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg", nin: "css" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const Galery = () => {
  const data = useStaticQuery(query);
  const node = data.allFile.nodes;
  return (
    <Wrapper>
      {node.map((image, index) => {
        const myImage = getImage(image);
        const { name } = image;
        return (
          <article key={index} className="item">
            {<GatsbyImage image={myImage} className="galley-img" alt={name} />}
            <p>{name}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: auto;
  }
  .galley-img {
    border-radius: 1rem;
  }
`;

export default Galery;
