import React from "react";

import { Link } from "gatsby";

const Terms = ({ active, handleModal }) => (
  <div className={`modal ${active}`}>
    <div className="modal-background" onClick={handleModal}></div>
    <div className="modal-content">
      <div className="hero is-danger is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Termos e Condições</h1>
            <p>
              Tendo como objetivo a prestação de um serviço de qualidade,
              garantindo a confidencialidade e a segurança dos dados pessoais,
              a <strong>DS Crédito Vila Nova de Gaia</strong>  (adiante
              designado por <strong>“DS Crédito VNG”</strong>) estabelece o
              seguinte compromisso de privacidade, respeitando as normas éticas
              e legais em vigor definidas pelo Regulamento Geral sobre a
              Proteção de Dados (RGPD), Regulamento (UE) 2016/679 do Parlamento
              Europeu e do Conselho, de 27 de abril de 2016. Se é nosso cliente
              ou potencial cliente, recomendamos a leitura deste documento.
            </p>
            <p>
              A <strong>DS Crédito VNG</strong> é uma sociedade comercial que
              exerce a atividade de intermediação de crédito na categoria de
              vinculado, mediante contrato de vinculação celebrado com vários
              bancos sem exclusividade, encontrando-se autorizado, pelo Regime
              Jurídico dos Intermediários de Crédito, para a prestação dos
              seguintes serviços: análise de solvabilidade, apresentação ou
              proposta de contratos de crédito a consumidores, contratos de
              crédito à habitação, assistência a consumidores, mediante a
              realização de atos preparatórios ou de outros trabalhos de gestão
              pré-contratual relativamente a contratos de crédito que não tenham
              sido por si apresentados ou propostos e celebração de contratos de
              crédito com consumidores em nome dos mutuantes.
            </p>
            <p>
              A <strong>DS Crédito VNG</strong> é responsável pelo tratamento de
              todos os dados pessoais recolhidos através do sítio na Internet 
              <Link to="/">
                <strong>www.ocredito.com</strong>
              </Link>
                Os dados recolhidos no nosso site são tratados pela{" "}
              <strong>DS Crédito VNG</strong> de forma automática e destinam-se
              à análise de solvabilidade e carregamento da proposta de
              crédito para apresentar aos diversos parceiros. Ao preencher os
              campos do site, ao enviar os documentos necessários para aferir a
              solvabilidade do cliente o utilizador, assume a responsabilidade
              pela veracidade dos seus dados e documentos enviados.    Ao
              submeter os dados está a dar consentimento prévio e expresso para
              que a DS Crédito VNG possa contactar por email, SMS ou por
              telefone para as finalidades atrás indicadas. A prestação de
              quaisquer dados é facultativa.
            </p>
            <p>
              A <strong>DS Crédito VNG</strong> está sujeita ao sigilo bancário,
              nos termos do disposto no artigo 3.º, n.º 1 do Decreto-Lei n.º
              81-C/2017, pelo que a transferência de dados pessoais para
              entidades terceiras apenas são efetuadas quando os
              parceiros, mediante o contrato de vinculação, garantam de igual
              modo, a observância do sigilo bancário, bem como as demais normas
              e legislação de proteção de dados.
            </p>
            <p>
              Os documentos pessoais recolhidos pela{" "}
              <strong>DS Crédito VNG</strong>, destinam-se à análise de
              solvabilidade e carregamento de propostas de crédito junto dos
              diversos parceiros, mediante contrato de vinculação de crédito,
              respeitando os termos do disposto no artigo 3.º, n.º 1 do
              Decreto-Lei n.º 81-C/2017.    Nos termos da Lei é-lhe garantido o
              direito de acesso, eliminação e retificação dos seus dados, a
              exercer, junto da DS Crédito VNG, com sede na Rua de Moçambique,
              nº 28, 4430-145  Vila Nova de Gaia, Porto, Portugal.
            </p>
            <p>
              A <strong>DS Crédito VNG</strong> implementou ainda medidas de
              segurança contra o acesso, a alteração, a divulgação e/ou a
              destruição de dados de forma não autorizada sendo que o sítio na
              Internet e os dados pessoais fornecidos pelos utilizadores são
              devidamente armazenados num ambiente de elevado nível de
              segurança, garantindo a proteção e confidencialidade dos mesmos.
              Independentemente das medidas de segurança implementadas e
              constantemente melhoradas, a <strong>DS Crédito VNG</strong>{" "}
              adverte que a circulação dos dados em redes abertas pode permitir
              a visualização ou utilização dos dados por terceiros.
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={handleModal}
    ></button>
  </div>
);

export default Terms;
