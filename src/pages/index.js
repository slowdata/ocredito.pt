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
    <h1 className="mt-4 text-2xl text-center text-gray-800 font-semibold">
      Uma equipa especializada, pronta para o ajudar.
    </h1>
    <p>
      Esclarecer e ajudamos nas suas dúvidas financeiras. Crédito habitação,
      automóvel, pessoal ou transferências. Garantimos as melhores condições.
    </p>
  </Layout>
);

export default indexPage;
