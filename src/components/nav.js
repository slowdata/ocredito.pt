import React from "react";
import { Link } from "gatsby";

const Nav = ({ showMenu, className }) =>
  console.log(className) || (
    <nav
      className={`${className} ${
        !showMenu ? "opacity-0" : "opacity-1"
      } min-h-screen bg-pink-200`}
      style={{ transition: "all 0.5s ease-out" }}
    >
      <ul className="pt-10 text-pink-800 font-semibold text-center">
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li className="pt-2">
          <Link>Artigos</Link>
        </li>
        <li className="pt-2">
          <Link>Contactos</Link>
        </li>
      </ul>
    </nav>
  );

export default Nav;
