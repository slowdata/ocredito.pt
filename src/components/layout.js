import React, { Component } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Nav from "./nav";

class Layout extends Component {
  state = {
    menuOpen: false
  };

  handleClick = () => {
    this.setState(prev => ({ menuOpen: !prev.menuOpen }));
  };

  render() {
    const { children } = this.props;
    const { menuOpen } = this.state;

    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
      <>
        {data}
        <header
          className={` ${menuOpen ? "h-screen bg-pink-200 " : ""}`}
          style={{ transition: "all 0.3s ease-out" }}
        >
          <div className="py-2 px-4 flex justify-between">
            <div>
              <Link
                className="ml-2 flex items-center focus:outline-none"
                to="/"
              >
                <span
                  className="w-8 h-8 flex items-center justify-center 
                rounded-full text-white font-semibold text-xl bg-pink-600"
                >
                  €
                </span>
                <span className="px-1 text-xl hover:text-pink-400 text-pink-600">
                  credito
                </span>
              </Link>
            </div>
            <div className="mr-3 flex items-center">
              <nav className=" text-pink-600 font-semibold hidden sm:block">
                <Link
                  className="p-2 mr-2 rounded-full hover:bg-pink-200"
                  to="/sobre"
                >
                  Sobre
                </Link>
                <Link
                  className="p-2 mr-2 rounded-full hover:bg-pink-200"
                  to="/artigos"
                >
                  Artigos
                </Link>
                <Link
                  className="p-2 rounded-full hover:bg-pink-200"
                  to="/contactos"
                >
                  Contactos
                </Link>
              </nav>
              <button
                className="block sm:hidden rounded hover:bg-pink-200 focus:outline-none"
                onClick={() => this.handleClick()}
              >
                <div
                  className={`${
                    menuOpen ? "hidden" : ""
                  } w-10 h-10 px-2 flex flex-col justify-center 
          items-center`}
                >
                  <span
                    id="btn-1"
                    className="w-full px-3 border border-pink-600"
                  ></span>
                  <span
                    id="btn-2"
                    className="mt-1 w-full px-3 border border-pink-600"
                  ></span>
                  <span
                    id="btn-3"
                    className="mt-1 w-full px-3 border border-pink-600"
                  ></span>
                </div>
                <div
                  className={`${
                    !menuOpen
                      ? "hidden"
                      : "w-10 h-10 px-2 flex justify-center items-center"
                  } `}
                >
                  <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                    <path
                      className="text-pink-600"
                      d="M 10,10 L 30,30 M 30,10 L 10,30"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <Nav showMenu={menuOpen} />
        </header>
        <main className={menuOpen ? "hidden" : ""}>{children}</main>
      </>
    );
  }
}

export default Layout;
