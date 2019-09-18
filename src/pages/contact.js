import React, { Component } from "react";

import contactStyle from "./contact.module.css";

class ContactPage extends Component {
  handleSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="column is-half is-offset-one-quarter">
              <div className={`${contactStyle.foobar} card is-green`}>
                <div className="card-content">
                  <form name="contact" onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label className="label">Nome</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Text input"
                        />
                      </div>
                      <p className="help">This is a help text</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
