import React, { Component } from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";

//import Container from "../components/container";

// const contact = {
//   title: "OCredito.pt",
//   subtitle:
//     "(Brevemente...) O seu novo canto para informação, dúvidas e ajuda.",
//   email: "ocredito.pt@gmail.com",
//   phone: "+351-937 384 062"
// };

class indexPage extends Component {
  state = {
    leftMenu: false
  };
  handleClick = () => {
    this.setState(prev => ({ leftMenu: !prev.leftMenu }));
  };
  render() {
    const { leftMenu } = this.state;
    return (
      <>
        <header
          className={`${leftMenu ? "bg-pink-200" : ""}`}
          style={{ transition: "all 0.5s ease-out" }}
        >
          <div className="py-2 px-4 flex justify-between">
            <div>
              <Link
                className="ml-2 flex items-center focus:outline-none"
                to="/"
              >
                <span
                  className="w-10 h-10 flex items-center justify-center 
                rounded-full text-white font-semibold text-xl bg-pink-600"
                >
                  €
                </span>
                <span className="pl-1 text-xl text-pink-800 ">credito.pt</span>
              </Link>
            </div>
            <button
              className="sm:md:lg:xl:hidden mr-4 rounded hover:bg-pink-200 focus:outline-none"
              onClick={() => this.handleClick()}
            >
              <div
                className={`${
                  leftMenu ? "hidden" : ""
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
                  !leftMenu
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
        </header>
        <Nav showMenu={leftMenu} className="bg-grey-900" />
      </>
    );
  }
}

export default indexPage;
