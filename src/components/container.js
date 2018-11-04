import React from "react";

import "../../node_modules/bulma/css/bulma.min.css";
//import containerStyles from "./container.module.css";

export default props => (
  <section className="hero is-fullheight is-danger">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <span />
        <h2 className="subtitle">{props.subtitle}</h2>
      </div>
    </div>
  </section>
);
