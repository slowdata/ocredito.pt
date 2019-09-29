import React from "react";

const Privacy = ({ active, handleModal }) => (
  <div className={`modal ${active}`}>
    <div className="modal-background" onClick={handleModal}></div>
    <div className="modal-content">
      <div className="hero is-danger is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Política de Privacidade</h1>
            <p>
              De forma a prestar um serviço de qualidade, garantindo a
              confidencialidade e a segurança dos dados pessoais, estabelecemos
              o seguinte compromisso de privacidade, respeitando as normas
              éticas e legais em vigor definidas pelo Regulamento Geral sobre a
              Proteção de Dados (RGPD), Regulamento (UE) 2016/679 do Parlamento
              Europeu e do Conselho, de 27 de abril de 2016. A{" "}
              <strong>DS Crédito Vila Nova de Gaia</strong> (Molécula Decimal
              Unipessoal, Lda.) respeita a privacidade dos seus clientes. Todos
              os dados recolhidos sobre os clientes servem para obter informação
              sobre os seus gostos e também para promover os nossos serviços.
            </p>
            <p>
              <strong>
                Não alugamos ou vendemos as bases de dados dos nossos clientes a
                terceiros.
              </strong>
              Caso tenha alguma dúvida sobre a nossa política de privacidade,
              poderá entrar em contacto com o nosso serviço de apoio ao cliente.
              O cliente de exigir a qualquer momento que alteremos a forma como
              utilizamos a sua informação pessoal.
            </p>
            <p>
              <strong>Que tipo de informação recolhemos?</strong>
              As informações pessoais recolhidas apenas serão divulgadas dentro
              do nosso grupo e/ou junto dos parceiros/clientes para uso na
              internet. Estas informações pessoais que recolhemos serão usadas
              das seguintes formas:
            </p>
            <ul>
              <li>
                - para direcionar o seu pedido a algum dos nossos parceiros;
              </li>
              <li>
                - para lhe fornecer informação relevante sobre alguns serviços;
              </li>
              <li>
                - para processar o seu pedido juntamente com serviços e
                informações oferecidos através do nosso site internet.
              </li>
            </ul>
            <p>
              Deste modo, o utilizador garante que os dados pessoais fornecidos
              são verdadeiros e precisos e compromete-se a notificar qualquer
              mudança ou alteração dos mesmos. Qualquer perda ou dano causado ao
              site internet, à pessoa responsável pelo mesmo ou a qualquer
              terceiro através do fornecimento de informação errónea, inexata ou
              incompleta no formulário de registo será da inteira
              responsabilidade do utilizador. Quando se registar ou subscrever
              no nosso site, poderemos também utilizar a sua informação pessoal
              para lhe enviar/entrar em contacto consigo relativamente a
              assuntos de marketing de tempos a tempos.  Não utilizaremos os
              seus dados pessoais para marketing direto sem o seu consentimento
              por escrito. Dar-lhe-emos sempre, em qualquer momento, a liberdade
              de cancelar a subscrição de informação de marketing, utilizando a
              função para esse efeito inserido no material de marketing
              eletrónico. As informações recolhidas neste site e nos nossos
              formulários serão conservadas por um período de três anos. Estes
              dados podem serem utilizados com a finalidade de personalizar as
              comunicações que lhe serão enviadas.
            </p>
            <p>
              O utilizador beneficia de um direito de acesso, de retificação, de
              atualização e de supressão das informações que lhe diz respeito
              que pode exercer contactando: <strong>vngaia@dscredito.pt</strong>
            </p>
            <br />
            <br />
            <p>
              <strong>Política de Cookies</strong>
            </p>
            <p>
              <strong>O que são os cookies</strong>
            </p>
            <p>
              Como é prática comum com quase todos os sites profissionais, este
              site usa cookies, que são pequenos arquivos que são descarregados
              para o seu computador, para melhorar a sua experiência. Esta
              página descreve as informações que esses cookies recolhem, como os
              usamos e porque às vezes precisamos de os armazenar. Também
              explicaremos como pode evitar que esses cookies sejam armazenados,
              uma vez que isso pode causar alguns problemas em certos elementos
              da funcionalidade do site. Para obter informações mais gerais
              sobre os cookies, poderá ler o artigo da Wikipedia sobre Cookies
              HTTP.
            </p>
            <p>
              <strong>Como usamos os cookies</strong>
            </p>
            <p>
              Usamos cookies por uma variedade de razões detalhadas abaixo.
              Infelizmente, na maioria dos casos, não há opções padrão do setor
              para desativar cookies sem desativar completamente a
              funcionalidade e os recursos que eles adicionam ao site.
              Recomenda-se que deixe ativos todos os cookies caso não tenha a
              certeza se estes serão usados ​​para fornecer o serviço que
              pretende usar.
            </p>
            <p>
              <strong>Desativando cookies</strong>
            </p>
            <p>
              Pode evitar a ativação de cookies, alterando as configurações do
              seu navegador (consulte a Ajuda do navegador). Esteja ciente de
              que a desativação de cookies afetará a funcionalidade deste e de
              muitos outros sites que visita. Desativar cookies geralmente
              resultará em desabilitar certas funcionalidades e recursos deste
              site. Portanto, é recomendável que não desative os cookies.
            </p>
            <p>Os Cookies que usamos</p>
            <p>
              <strong>Cookies analíticos</strong>: São utilizados para efeitos
              de criação e análise de estatísticas, no sentido de melhorar o
              funcionamento do website e otimizar as vendas, obter informações
              sobre o uso do site, para que possamos ajustá-lo para proporcionar
              uma melhor experiência ao utilizador.
            </p>
            <p>
              Segurança: Utilizamos o serviço CloudFlare, seu cookie identifica
              o tráfego confiável da web.
            </p>
            <p>
              <strong>Cookies de funcionalidade</strong>: Cookies que são
              necessários para que o site funcione apropriadamente. Guardam as
              preferências do utilizador relativamente à utilização do site,
              para que não seja necessário voltar a configurar o site cada vez
              que o visita.
            </p>
            <p>
              <strong>Publicidade e marketing</strong>: Informações recolhidas
              para o envio de e-mails ou notificações, como e-mail marketing,
              recuperação de carrinho. Além de poder exibir publicidade baseada
              nos dados recolhidos.
            </p>
            <p>
              <strong>Mais Informações</strong>
            </p>
            <p>
              Esperamos que tenha ficado esclarecido e, como foi mencionado
              anteriormente, se não tem certeza se precisa ou não, geralmente é
              mais seguro deixar os cookies ativados caso interaja com um dos
              recursos que usa no nosso site. No entanto, se ainda está à
              procura de mais informações, entre em contato connosco, através de
              um dos nossos métodos de contato disponibilizados. Esta política
              pode ser atualizada sem aviso prévio, portanto reveja-a
              periodicamente para assegurar-se estar informado sobre estas
              mudanças.
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

export default Privacy;
