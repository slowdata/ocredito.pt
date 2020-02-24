import React from "react";

import { Link } from "gatsby";

import Nav from "./nav";

const Header = ({ handleMenu, menuOpen }) => (
  <>
    <header
      className={` ${menuOpen ? "bg-pink-200 h-screen" : ""}`}
      style={{ transition: "all 0.3s ease-out" }}
    >
      <div className="py-3 px-4 flex justify-between">
        <div>
          <Link className="ml-2 flex items-center focus:outline-none" to="/">
            <span
              className="w-10 h-10 flex items-center justify-center 
                rounded-full text-white font-semibold text-xl bg-pink-600"
            >
              €
            </span>
            <span className="pl-1 text-xl text-pink-600">credito.pt</span>
          </Link>
        </div>
        <div>
          <nav className="py-2 text-pink-600 font-semibold hidden sm:block">
            <Link
              className="p-2 mr-2 rounded-full hover:bg-pink-200"
              to="/about"
            >
              Sobre
            </Link>
            <Link
              className="p-2 mr-2 rounded-full hover:bg-pink-200"
              to="/artigos"
            >
              Artigos
            </Link>
            <Link className="p-2 rounded-full hover:bg-pink-200" to="/contacts">
              Contactos
            </Link>
          </nav>
          <button
            className="block sm:hidden rounded hover:bg-pink-200 focus:outline-none"
            onClick={() => handleMenu()}
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
  </>
);

export default Header;
