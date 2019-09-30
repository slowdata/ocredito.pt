import React, { Component } from "react";

import Terms from "../components/terms";
import Privacy from "../components/privacy";

import contactStyle from "./contact.module.css";

const labels = {
  name: "Nome",
  phone: "Telefone",
  email: "Email",
  goal: "Finalidade do Crédito",
  rent: "Valor atual da Prestação / Renda",
  credit: "Valor do Crédito Pretendido",
  income: "Rendimento liquido mensal do agregado familiar",
  household1: "Situação profissional do agregado familiar",
  household2: "Situação profissional do agregado familiar 2",
  obs: "Observações"
};

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
    obs: "",
    terms: false,
    notification: false,
    message: "",
    error: false,
    modalTerms: false,
    modalPrivacy: false
  };

  handleChange = e => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({
      notification: false,
      [name]: value,
      message: "",
      error: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      terms,
      notification,
      message,
      error,
      modalTerms,
      modalPrivacy,
      ...fields
    } = this.state;

    if (terms === false) {
      const message = "Por favor leia e aceite os termos do nosso site!";
      this.setState({ notification: true, error: true, message });
    } else {
      //const { 0: first, length: len, [len - 1]: last } = fields;
      //console.log(first, last, len, fields);
      const fieldNames = Object.keys(fields);

      const checkedFields = fieldNames.map(f => {
        const value = fields[f];
        if (typeof value === "string") {
          if (value === "" && f !== "obs") return { [f]: true };
          return { [f]: false };
        } else {
          if (value <= 0) return { [f]: true };
          return { [f]: false };
        }
      });

      const errors = checkedFields
        .filter(f => Object.values(f).includes(true))
        .map(err => labels[Object.keys(err)[0]]);

      if (errors.length === 1) {
        const message = `O campo - ${
          errors[0]
        } - deve ser preenchido ou o valor é errado.`;
        this.setState({ message, notification: true, error: true });
      } else if (errors.length > 1) {
        const message = `Os campos - ${errors.join(
          ", "
        )} - devem ser preenchidos ou valor é errado.`;
        this.setState({ message, notification: true, error: true });
      } else {
        fetch("https://polar-basin-02862.herokuapp.com/api/email/ocredito", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fields)
        })
          .then(res => {
            if (res.status === 201) {
              const message = `${fields.name} obrigado pelo seu pedido. Entraremos em contacto o mais breve que nos for possivel.`;
              this.setState({ notification: true, message, erro: false });
            } else {
              const message =
                "Ocorreu erro ao submeter o pedido. Não exite em entrar em contacto connosco.";
              this.setState({ notification: true, message, error: true });
            }
          })
          .catch(error => {
            const message = error.message;
            this.setState({ notification: true, message, error: true });
          });
      }
    }
  };

  handleClick = e => {
    this.setState({ notification: false, message: "", error: false });
  };

  handleModalPrivacy = () =>
    this.setState(prevState => {
      console.log(this.state.modal);

      return {
        modalPrivacy: !prevState.modalPrivacy
      };
    });

  handleModalTerms = () =>
    this.setState(prevState => {
      console.log(this.state.modal);

      return {
        modalTerms: !prevState.modalTerms
      };
    });

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
      obs,
      terms,
      notification,
      message,
      error,
      modalTerms,
      modalPrivacy
    } = this.state;

    return (
      <div className={`${contactStyle.fundopink} hero`}>
        <div className="hero-body">
          <div className="container">
            <div className="column is-8 is-offset-2">
              <div className="box">
                {notification && (
                  <div
                    className={`notification ${
                      error ? "is-danger" : "is-success"
                    }`}
                  >
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
                    <label className="label">{labels["name"]}</label>
                    <div className="control">
                      <input
                        className="input"
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
                    <label className="label">{labels["phone"]}</label>
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
                    <label className="label">{labels["email"]}</label>
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
                    <label className="label">{labels["goal"]}</label>
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
                    <label className="label">{labels["rent"]}</label>
                    <div className="field-body">
                      <div className="field is-expanded">
                        <div className="field has-addons">
                          <p className="control is-expanded">
                            <input
                              className="input"
                              type="number"
                              name="rent"
                              value={rent === 0 ? "" : rent}
                              placeholder="450"
                              onChange={this.handleChange}
                            />
                          </p>
                          <p className="control">
                            <button className="button is-static">€</button>
                          </p>
                        </div>
                        <p className="help has-text-danger">
                          Caso não exista valor de prestação/renda coloque o
                          valor <strong className="has-text-danger">0</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">{labels["income"]}</label>
                    <div className="field-body">
                      <div className="field is-expanded">
                        <div className="field has-addons">
                          <div className="control is-expanded">
                            <input
                              className="input"
                              type="number"
                              name="income"
                              value={income === 0 ? "" : income}
                              placeholder="3000"
                              onChange={this.handleChange}
                            />
                          </div>
                          <p className="control">
                            <button className="button is-static">€</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">{labels["household1"]}</label>
                  </div>

                  <div className="columns">
                    <div className="column is-6">
                      <div className="field">
                        <div className="control is-expanded">
                          <div className="select is-fullwidth">
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
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <div className="control is-expanded">
                          <div className="select is-fullwidth">
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
                    </div>
                  </div>
                  <div className="help">
                    Preencha por favor a situação para os dois agregados
                  </div>
                  <br />

                  <div className="field">
                    <label className="label">{labels["credit"]}</label>
                    <div className="field-body">
                      <div className="field is-expanded">
                        <div className="field has-addons">
                          <p className="control is-expanded">
                            <input
                              className="input"
                              type="number"
                              name="credit"
                              value={credit === 0 ? "" : credit}
                              placeholder="100000"
                              onChange={this.handleChange}
                            />
                          </p>
                          <p className="control">
                            <button className="button is-static">€</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="label">
                      {labels["obs"]}
                    </label>
                    <div className="control">
                      <textarea
                        name="obs"
                        id=""
                        cols="30"
                        rows="5"
                        className="textarea"
                        placeholder="É possivel escrever neste campo até 5 linhas..."
                        value={obs}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <br />
                  <div className="field">
                    <div className="control">
                      Ao avançar está aceitar os Termos e Condições e Politica
                      de Privacidade deste site.
                    </div>
                  </div>

                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={terms}
                      onChange={this.handleChange}
                    />{" "}
                    Aceitar
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
        <div className="hero-foot">
          <div className="content has-text-centered">
            <button className="button is-text" onClick={this.handleModalTerms}>
              Termos e Condições
            </button>
            <button
              className="button is-text"
              onClick={this.handleModalPrivacy}
            >
              Política de Privacidade
            </button>
          </div>
        </div>
        <Terms
          active={modalTerms ? "is-active" : ""}
          handleModal={this.handleModalTerms}
        />
        <Privacy
          active={modalPrivacy ? "is-active" : ""}
          handleModal={this.handleModalPrivacy}
        />
      </div>
    );
  }
}

export default ContactPage;
