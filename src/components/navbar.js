import React from "react";

import { StaticQuery, graphql, Link } from "gatsby";
import navbarStyles from "./navbar.module.css";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item has-text-danger has-text-weight-bold is-size-3"
          >
            <img
              className={navbarStyles.brand}
              src="../credito.png"
              alt="O credito icon"
            />
            {data.site.siteMetadata.title.toUpperCase()}
          </Link>
        </div>
      </nav>
    )}
  />
);
