import React from "react";
import { Link } from "gatsby";

const Nav = ({ showMenu }) => (
  <nav
    className={`sm:hidden mb-2 px-6 pb-4 pt-6 ${
      !showMenu ? "hidden" : "visible"
    }`}
    style={{ transition: "all 0.5s ease-out" }}
  >
    <Link
      className=" block px-3 py-1 text-center font-semibold text-pink-600 hover:bg-pink-300 rounded"
      to="/sobre"
    >
      Sobre
    </Link>
    <Link
      className="mt-1 block px-3 py-1 text-center font-semibold text-pink-600 hover:bg-pink-300 rounded"
      to="/artigos"
    >
      Artigos
    </Link>
    <Link
      className=",t-1 block px-3 py-1 text-center font-semibold text-pink-600 hover:bg-pink-300 rounded"
      to="/contactos"
    >
      Contactos
    </Link>
  </nav>
);

export default Nav;
