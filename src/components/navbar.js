import React, { Component } from "react";

import { StaticQuery, graphql, Link } from "gatsby";

class NavBar extends Component {
  state = {
    showMenu: false
  };

  toggleMenu = () => {
    this.setState((prevState, props) => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };

  render() {
    const burgerActive = this.state.showMenu ? "is-active" : "";
    const menuActive = this.state.showMenu ? "is-active" : "";
    return (
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
          <nav
            className="navbar has-shadow"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                  <img src="../credito.png" alt="O credito icon" />
                  <div className="is-size-3 has-text-danger has-text-weight-bold">
                    {data.site.siteMetadata.title.toUpperCase()}
                  </div>
                </Link>
                <a
                  role="button"
                  className={`navbar-burger has-text-danger ${burgerActive}
                  }`}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbar-menu"
                  onClick={this.toggleMenu}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>
              <div id="navbar-menu" className={`navbar-menu ${menuActive}`}>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <Link to="/creditos" className="has-text-danger">
                      Creditos
                    </Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/blog" className="has-text-danger">
                      Blog
                    </Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/contactos" className="has-text-danger">
                      Contactos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      />
    );
  }
}

export default NavBar;
