import React, { Component } from "react";

import contactStyle from "./contact.module.css";

class ContactPage extends Component {
  handleSubmit = e => {
    console.log(e);
  };
  render() {
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
                          required
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
                          required
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
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Finalidade do Crédito</label>
                      <div class="control">
                        <div class="select">
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
                        <input className="input" type="number" required />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">
                        Valor do Crédito Pretendido?
                      </label>
                      <div className="control">
                        <input className="input" type="number" required />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">
                        Rendimento liquido mesal do agragado familiar
                      </label>
                      <div className="control">
                        <input className="input" type="number" required />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">
                        Situação profissional do agregado familiar?
                      </label>
                    </div>

                    <div className="field is-grouped">
                      <p class="control">
                        <div class="select">
                          <select>
                            <option>Efetivo</option>
                            <option>A prazo</option>
                            <option>Reformado</option>
                            <option>Desempregado</option>
                            <option>Não se aplica</option>
                          </select>
                        </div>
                      </p>
                      <p class="control">
                        <div class="select">
                          <select>
                            <option>Efetivo</option>
                            <option>A prazo</option>
                            <option>Reformado</option>
                            <option>Desempregado</option>
                            <option>Não se aplica</option>
                          </select>
                        </div>
                      </p>
                    </div>
                    <p class="help">
                      Preencha por favor a situação para os dois agregados
                    </p>
                    <br />
                    <div className="field">
                      <p>
                        Ao avançar está aceitar os Termos e Condições e Politica
                        de Privacidade deste site.
                      </p>
                    </div>

                    <div className="field is-grouped is-grouped-right">
                      <div class="control ">
                        <button class="button is-danger">
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
