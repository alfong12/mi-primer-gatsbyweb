import { useStaticQuery, graphql } from "gatsby";
import React from "react";

const getData = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        autor
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FechData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      {/* <h2>name: {data.site.info.person.name} </h2> */}
      <h2>site title is: {title}</h2>
    </div>
  );
};

export default FechData;
