import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Faq from "../components/faq";

const indexPage = ({ data }) => (
  <>
    <Layout>
      <h1 className="text-center sm:max-w-sm sm:mx-auto text-2xl leading-snug font-semibold text-gray-900">
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
      <p className="mt-4 text-gray-700 text-center">
        Aconselhamos e esclarecemos as suas dúvidas financeiras.
      </p>
      <p className="text-gray-700 text-center">
        Crédito habitação, automóvel, pessoal e transferências de crédito.
        <span className="text-gray-700 text-center border-b-2 border-pink-300">
          {" "}
          Ajudamos a conseguir as melhores condições para os seus projetos
        </span>
      </p>

      <div className="mt-6 p-4 bg-pink-600 rounded-lg shadow-md hover:shadow-lg">
        <div className="py-2 border-b border-pink-500">
          <h2 className="text-lg text-white text-center">
            Soluções de Crédito
          </h2>
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
          <ul className="flex flex-col sm:flex-row sm:justify-evenly px-5 py-3 text-sm text-white font-medium">
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

      <div className="mt-4 p-4 bg-gray-300 rounded-lg shadow-md hover:shadow-lg">
        <div className="pt-2 pb-6 border-b border-gray-400">
          <h2 className="text-lg text-gray-800 text-center">Parcerias</h2>
          <p className="mt-2 text-sm font-medium text-gray-800 text-center">
            Interessado em parcerias? Ajudamos no seu negócio
          </p>
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row sm:justify-evenly px-5 py-3 text-sm text-gray-800 font-medium">
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
              Solicite mais informações
            </a>
          </div>
        </div>
      </div>
    </Layout>

    <Faq />

    <aside className="pt-24">
      <div className="px-4 pt-12 pb-56 bg-pink-900 text-white">
        <h2 className="text-xl font-medium leading-snug">
          Testemunhos de quem solicitou os nossos serviços
        </h2>
        <p className="mt-3 text-sm text-pink-200">
          Alguns comentários de clientes que nos contactaram e usufruiram dos
          nossos serviços
        </p>
      </div>

      <div className="-mt-48 px-4">
        <figure className="pt-5 pb-6 bg-white rounded-lg shadow-lg">
          <blockquote className="text-sm relative font-medium italic text-gray-700">
            <span className="px-4 opacity-25 absolute leading-none text-4xl text-gray-500 font-serif">
              &ldquo;
            </span>
            <div className="px-8 pt-2">
              <p>
                Pedi informações sobre crédito habitação por interesse na
                aquisição de um apartamento.
              </p>
              <p className="mt-4">
                Consegui um empréstimo com um spread bastante inferior ao que já
                me foi oferecido e em várias simulações que realizei.
              </p>
              <p className="mt-4 font">
                Simpatia e profissionalismo, recomendo sem a menor dúvida!
              </p>
            </div>
          </blockquote>
          <figcaption className="px-8 mt-6 text-gray-700 flex">
            <div>
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.7&w=144&h=144&q=80"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center text-sm">
              <p className="font-semibold text-pink-600">Joana Ninguém</p>
              <p>Crédito habitação</p>
            </div>
          </figcaption>
        </figure>
        <div className="mt-4 flex justify-center">
          <button>
            <svg
              className="h-2 w-2 text-gray-500"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cy="4" cx="4" r="3"></circle>
            </svg>
          </button>
          <button>
            <svg
              className="ml-2 h-2 w-2 text-gray-500"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cy="4" cx="4" r="3"></circle>
            </svg>
          </button>
          <button>
            <svg
              className="ml-2 h-2 w-2 text-gray-500"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cy="4" cx="4" r="3"></circle>
            </svg>
          </button>
        </div>
      </div>
    </aside>

    <section className="px-4 pt-6 pb-20">
      <h2 className="text-xl font-bold text-center leading-snug text-gray-900">
        Trabalhamos para conseguir o
        <span className="block">melhor para si</span>
      </h2>
      <p className="mt-4 text-center text-gray-700">
        Entre em contacto connosco. Não exite!
      </p>
      <div className="mt-6 flex justify-center">
        <a
          href="#"
          className="flex-grow px-4 py-3 font-semibold bg-pink-600 text-center text-white rounded"
        >
          Faça uma simulação
        </a>
        <a
          href="#"
          className="flex-grow ml-2 px-4 py-3 font-semibold border border-pink-600 text-center text-pink-700 rounded"
        >
          Contactos
        </a>
      </div>
    </section>

    <footer className="px-4 py-8 text-gray-700 text-sm">
      <p className="text-center">&copy; 2020 ocredito</p>
    </footer>
  </>
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
