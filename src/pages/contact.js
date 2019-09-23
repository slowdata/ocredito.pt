import React, { Component } from "react";

import contactStyle from "./contact.module.css";

class ContactPage extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    goal: "home",
    rent: 0,
    credit: 0,
    income: 0,
    household1: "effective",
    household2: "effective",
    terms: false,
    notification: false,
    message: "",
    error: {}
  };

  handleChange = e => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    console.log(">>", name, value);

    this.setState(prev => {
      const notification = prev.notification && false;

      return { notification, [name]: value, error: false };
    });
  };

  handleSubmit = e => {
    if (this.state.terms === false) {
      const message = "Por favor leia e aceite os termos do nosso site!";
      this.setState({ notification: true, message });
    } else {
      const fields = Object.keys(this.state);

      const { 0: first, length: len, [len - 1]: last } = fields;
      console.log(first, last, len, fields);
    }
    console.log(this.state);

    e.preventDefault();
  };

  handleClick = e => {
    this.setState({ notification: false });
  };

  render() {
    const {
      name,
      phone,
      email,
      goal,
      rent,
      credit,
      income,
      household1,
      household2,
      terms,
      notification,
      message,
      error
    } = this.state;

    return (
      <div className={`${contactStyle.foobar} hero`}>
        <div className="hero-body">
          <div className="container">
            <div className="column  is-8 is-offset-2">
              <div className={` box`}>
                {notification && (
                  <div className="notification is-danger">
                    <button
                      className="delete"
                      onClick={this.handleClick}
                    ></button>
                    {message}
                  </div>
                )}
                <h4 className="title is-4">Fazer pedido de crédito:</h4>
                <h5 className="subtitle is-6">
                  Todos os campos são de preenchimento obrigatório
                </h5>
                <form name="contact" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label className="label">Nome</label>
                    <div className="control">
                      <input
                        className={`input ${error && "is-danger"}`}
                        type="text"
                        placeholder="Manuel António Santos Silva"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <p className="help">Nome completo</p>
                  </div>
                  <div className="field">
                    <label className="label">Telemóvel</label>
                    <div className="control">
                      <input
                        className="input"
                        type="tel"
                        placeholder="961234567"
                        pattern="[0-9]{9}"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="manuel@mail.pt"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Finalidade do Crédito</label>
                    <div className="control">
                      <div className="select">
                        <select
                          name="goal"
                          value={goal}
                          onChange={this.handleChange}
                        >
                          <option value="home">Aquisição de Imóvel</option>
                          <option value="exchange">
                            Troca de crédito de habitação
                          </option>
                          <option value="consolidate">
                            Consolidar créditos
                          </option>
                          <option value="personal">Crédito Pessoal</option>
                          <option value="car">Crédito automóvel</option>
                          <option value="other">Outro tipo de crédito</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">
                      Valor atual da Prestação / Renda
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        name="rent"
                        value={rent}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">
                      Valor do Crédito Pretendido?
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        name="credit"
                        value={credit}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">
                      Rendimento liquido mensal do agragado familiar
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        name="income"
                        value={income}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">
                      Situação profissional do agregado familiar?
                    </label>
                  </div>

                  <div className="field is-grouped">
                    <div className="control">
                      <div className="select">
                        <select
                          name="household1"
                          value={household1}
                          onChange={this.handleChange}
                        >
                          <option value="effective">Efetivo</option>
                          <option value="term">A prazo</option>
                          <option value="retired">Reformado</option>
                          <option value="unemployed">Desempregado</option>
                          <option value="other">Não se aplica</option>
                        </select>
                      </div>
                    </div>
                    <div className="control">
                      <div className="select">
                        <select
                          name="household2"
                          value={household2}
                          onChange={this.handleChange}
                        >
                          <option value="effective">Efetivo</option>
                          <option value="term">A prazo</option>
                          <option value="retired">Reformado</option>
                          <option value="unemployed">Desempregado</option>
                          <option value="other">Não se aplica</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="help">
                    Preencha por favor a situação para os dois agregados
                  </div>
                  <br />
                  <div className="field">
                    <div className="control">
                      Por favor leia e aceite os Termos e Condições e Politica
                      de Privacidade deste site para poder avançar.
                    </div>
                  </div>

                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={terms}
                      onChange={this.handleChange}
                    />{" "}
                    Aceito os termos
                  </label>

                  <div className="field is-grouped is-grouped-right">
                    <div className="control ">
                      <button className="button is-danger">
                        Enviar para análise
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
