import React from "react";

import "../../node_modules/bulma/css/bulma.min.css";
import containerStyles from "./container.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

export default ({ contact }) => (
  <section className="hero is-fullheight is-danger">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{contact.title}</h1>
        <span />
        <h2 className="subtitle">{contact.subtitle}</h2>
        <span />
        <div className={containerStyles.contact}>
          <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
          <a href={contact.email} className={containerStyles.foo}>
            ocredito.pt@gmail.com
          </a>
          <FontAwesomeIcon icon={faMobileAlt} size="2x" />
          <a href={contact.phone} className={containerStyles.foo}>
            937384062
          </a>
        </div>
      </div>
    </div>
  </section>
);
