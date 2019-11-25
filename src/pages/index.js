import React, { Component } from "react";
import { Link } from "gatsby";

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
    leftMenu: true
  };
  handleClick = () => {
    this.setState(prev => ({ leftMenu: !prev.leftMenu }));
  };
  render() {
    const { leftMenu } = this.state;
    return (
      <>
        <header>
          <div className="py-1 flex justify-between">
            <Link className="ml-2 flex items-center focus:outline-none" to="/">
              <span
                className="w-10 h-10 flex items-center justify-center 
              rounded-full text-white font-semibold text-xl bg-pink-600"
              >
                $
              </span>
              <span className="pl-1 text-lg text-pink-800">credito.pt</span>
            </Link>
            <button
              className="mr-4 rounded hover:bg-pink-200 focus:outline-none"
              onClick={() => this.handleClick()}
            >
              <div
                className={`${
                  !leftMenu ? "hidden" : ""
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
                  leftMenu ? "hidden" : ""
                } w-10 h-10 px-2 flex justify-center 
          items-center`}
                styles={{ transition: "all 0.5s ease-out" }}
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
        <div
          className={`${leftMenu ? "hidden" : null} min-h-screen bg-gray-800`}
          style={{ transition: "all 0.5s ease-out" }}
        ></div>
      </>
    );
  }
}

export default indexPage;
