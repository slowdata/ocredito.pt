import React from "react";

import Layout from "../components/layout";

//import Container from "../components/container";

// const contact = {
//   title: "OCredito.pt",
//   subtitle:
//     "(Brevemente...) O seu novo canto para informação, dúvidas e ajuda.",
//   email: "ocredito.pt@gmail.com",
//   phone: "+351-937 384 062"
// };

const indexPage = () => (
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
    <p className="mt-4 text-gray-700 text-center">
      Aconcelhamos e esclarecemos as suas dúvidas financeiras. Crédito
      habitação, automóvel, pessoal e transferências de crédito. Ajudamos a
      conseguir as melhores condições para os seus projectos
    </p>
  </Layout>
);

export default indexPage;
