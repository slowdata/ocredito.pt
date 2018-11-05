import React from "react";

import "../../node_modules/bulma/css/bulma.min.css";

import Container from "../components/container";
import NavBar from "../components/navbar";

const contact = {
  title: "O Credito.pt",
  subtitle:
    "(Brevemente...) O seu novo canto para informação, dúvidas e ajuda.",
  email: "ocredito.pt@gmail.com",
  phone: "+351-937 384 062"
};

export default () => (
  <div>
    <NavBar />
    <Container contact={contact} />;
  </div>
);
