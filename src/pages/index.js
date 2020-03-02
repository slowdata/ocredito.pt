import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

//import Container from "../components/container";

// const contact = {
//   title: "OCredito.pt",
//   subtitle:
//     "(Brevemente...) O seu novo canto para informação, dúvidas e ajuda.",
//   email: "ocredito.pt@gmail.com",
//   phone: "+351-937 384 062"
// };

const indexPage = ({ data }) => (
  <Layout>
    <h1 className="max-w-sm mx-auto text-2xl leading-snug font-semibold text-gray-900">
      <span className="mr-1 inline-flex relative text-white ">
        <span
          aria-hidden
          className="absolute inset-0 bg-pink-600"
          style={{ transform: "skewY(-.8deg) scaleX(1.04)" }}
        ></span>
        <span className="relative">Uma equipa</span>
      </span>
      especializada pronta para o ajudar a vencer
    </h1>
    <p className="mt-4 pb-6 text-gray-700 text-center">
      Aconselhamos e esclarecemos as suas dúvidas financeiras. Crédito
      habitação, automóvel, pessoal e transferências de crédito.{" "}
      <span className="border-b-2 border-pink-300">
        Ajudamos a conseguir as melhores condições para os seus projectos
      </span>
    </p>

    <div className="mt-8 p-4 pt-4 bg-pink-600 rounded-lg shadow-md hover:shadow-lg">
      <div className="pt-2 pb-2 border-b border-pink-500">
        <h2 className="text-lg text-white text-center">Soluções de Crédito</h2>
        <div className="flex items-center justify-center">
          <span className="text-7xl text-white font-bold tracking-tighter">
            €
          </span>
          <div className="pl-2 ml-12 flex flex-col text-sm text-white font-medium">
            <span>Poupança</span>
            <span>Confiança</span>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap py-5 text-sm text-white font-medium">
          {data.site.siteMetadata.creditos.map(c => (
            <li key={c.id} className="pb-3 mr-4 flex items-center">
              <svg
                aria-hidden
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  className="text-white"
                  fill="currentColor"
                  d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
                />
                <path
                  className="text-pink-600"
                  d="M8 13l3 3 5-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2">{c.name}</span>
            </li>
          ))}
        </ul>
        <div>
          <a
            href="#"
            className="block w-full py-3 text-center bg-pink-400 rounded text-white text-sm font-semibold border-t border-pink-300 shadow"
          >
            Entre em contacto connosco
          </a>
        </div>
      </div>
    </div>

    <div className="mt-4 p-4 pt-4 bg-gray-300 rounded-lg shadow-md hover:shadow-lg">
      <div className="pt-2 pb-6 border-b border-gray-400">
        <h2 className="text-lg text-gray-800 text-center">Parcerias</h2>
        <p className="mt-2 text-sm font-medium text-gray-800 text-center">
          Interessado em parcerias? Ajudamos no seu negócio
        </p>
      </div>
      <div>
        <ul className="flex flex-wrap py-6 text-sm text-gray-800 font-medium">
          {data.site.siteMetadata.parcerias.map(c => (
            <li key={c.id} className="pb-3 mr-4 flex items-center">
              <svg
                aria-hidden
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  className="text-gray-500"
                  fill="currentColor"
                  d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
                />
                <path
                  className="text-gray-700"
                  d="M8 13l3 3 5-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2">{c.name}</span>
            </li>
          ))}
        </ul>
        <div>
          <a
            href="#"
            className="block w-full py-3 text-center bg-gray-700 rounded text-white text-sm font-semibold shadow "
          >
            Solicite informações
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        creditos {
          id
          name
        }
        parcerias {
          id
          name
        }
      }
    }
  }
`;

export default indexPage;
