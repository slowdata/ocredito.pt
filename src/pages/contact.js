import React, { Component } from "react";

import contactStyle from "./contact.module.css";

class ContactPage extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    goal: "",
    rent: "",
    credit: "",
    income: "",
    household1: "",
    household2: "",
    terms: false
  };
  handleChange = e => {
    console.log(e.target);

    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    console.log(e.target);
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
      terms
    } = this.state;
    return (
      <div className="hero ">
        <div className="hero-body">
          <div className="container">
            <div className="column  is-8 is-offset-2">
              <div className={`${contactStyle.foobar} card is-green`}>
                <div className="card-content">
                  <form name="contact" onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label className="label">Nome</label>
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
                      <div className="help">Nome completo</div>
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
                          <select>
                            <option>Aquisição de Imóvel</option>
                            <option>Troca de crédito de habitação</option>
                            <option>Consolidar créditos</option>
                            <option>Crédito Pessoal</option>
                            <option>Crédito automóvel</option>
                            <option>Outro tipo de crédito</option>
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
                          name="goal"
                          value={goal}
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
                          <select>
                            <option>Efetivo</option>
                            <option>A prazo</option>
                            <option>Reformado</option>
                            <option>Desempregado</option>
                            <option>Não se aplica</option>
                          </select>
                        </div>
                      </div>
                      <div className="control">
                        <div className="select">
                          <select>
                            <option>Efetivo</option>
                            <option>A prazo</option>
                            <option>Reformado</option>
                            <option>Desempregado</option>
                            <option>Não se aplica</option>
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
                        Ao avançar está aceitar os Termos e Condições e Politica
                        de Privacidade deste site.
                      </div>
                    </div>

                    <label className="checkbox">
                      <input
                        type="checkbox"
                        name="terms"
                        value={terms}
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
      </div>
    );
  }
}

export default ContactPage;
