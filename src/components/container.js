import React from "react";

//import containerStyles from "./container.module.css";
import { Hero } from "react-bulma-components/full";

export default props => (
  <Hero color="danger" size="fullheight">
    <Hero.Body>
      <div class="container has-text-centered">
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">{props.subtitle}</h2>
      </div>
    </Hero.Body>
  </Hero>
);
