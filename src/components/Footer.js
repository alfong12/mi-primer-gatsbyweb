import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span>SymplyRecipes</span> Built with{" "}
        <a href="https://www.gatsbyjs.com/">Gastsby</a>
      </p>
    </footer>
  );
};

export default Footer;
