import React, { useState } from "react";

const Faq = () => {
  const [showFaq, setShowFaq] = useState([false, false, false]);

  const handleClick = index => {
    setShowFaq(showFaq.map((f, i) => (index === i ? !f : false)));
  };

  return (
    <section className="mt-16 pt-4 bg-gray-100">
      <div className="px-4">
        <h2 className="text-xl font-medium text-center">
          Dúvidas? Verifique algumas das perguntas e respostas.
        </h2>
        <p className="py-4 text-center text-gray-700">
          Algumas perguntas frequentes para o poder ajudar a esclarecer e
          perceber melhor os nossos serviços
        </p>
      </div>
      <dl className="mt-4">
        <div
          className={`px-4 py-6 ${
            showFaq[0] ? "bg-white shadow-lg" : "border-b-2 border-gray-200"
          }`}
        >
          <dt className="flex items-center">
            <span className="font-semibold">
              Posso pedir um emprestimo pessoal para comprar um automóvel?
            </span>
            <button className="p-4 block" onClick={() => handleClick(0)}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path
                  className={`text-gray-900 ${showFaq[0] ? "hidden" : null}`}
                  d="M12 4v16m8-8H4"
                  vectorEffect="non-scaling-stroke"
                  stroke="#4A5568"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className={`text-gray-900 ${showFaq[0] ? null : "hidden"}`}
                  d="M6 18L18 6M6 6l12 12"
                  vectorEffect="non-scaling-stroke"
                  stroke="#4A5568"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </dt>
          <dt className={`mt-2 text-sm ${showFaq[0] ? null : "hidden"}`}>
            Sim, mas será melhor avaliarmos a situação. Um empréstimo pessoal
            pode ter juros mais altos que um empréstimo cujo fim seja mesmo o
            automóvel, assim como o limite do crédito também pode ser inferior.
          </dt>
        </div>
        <div
          className={`px-4 py-6 ${
            showFaq[1] ? "bg-white shadow-lg" : "border-b-2 border-gray-200"
          }`}
        >
          <dt className="flex items-center">
            <span className="font-semibold">
              Se eu já tiver crédito posso vos contactar para uma possivel
              trasferência de crédito.
            </span>
            <button className="p-4 block" onClick={() => handleClick(1)}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path
                  className={`text-gray-900 ${showFaq[1] ? "hidden" : null}`}
                  d="M12 4v16m8-8H4"
                  vectorEffect="non-scaling-stroke"
                  stroke="#4A5568"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className={`text-gray-900 ${showFaq[1] ? null : "hidden"}`}
                  d="M6 18L18 6M6 6l12 12"
                  vectorEffect="non-scaling-stroke"
                  stroke="#4A5568"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </dt>
          <dt className={`mt-2 text-sm ${showFaq[1] ? null : "hidden"}`}>
            Sim, para além dos vários créditos pode nos contactar porque tudo
            faremos para conseguir melhores condições de crédito e assim fazer
            com que os nossos clientes poupem o máximo possivel.
          </dt>
        </div>

        <div
          className={`px-4 py-6 ${
            showFaq[2] ? "bg-white shadow-lg" : "border-b-2 border-gray-200"
          }`}
        >
          <dt className="flex items-center">
            <span className="font-semibold">
              Sou dono de uma imobiliária, posso realizar uma parceria convosco?
            </span>
            <button className="p-4 block" onClick={() => handleClick(2)}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path
                  className={`text-gray-900 ${showFaq[2] ? "hidden" : null}`}
                  d="M12 4v16m8-8H4"
                  vectorEffect="non-scaling-stroke"
                  stroke="#4A5568"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className={`text-gray-900 ${showFaq[2] ? null : "hidden"}`}
                  d="M6 18L18 6M6 6l12 12"
                  vectorEffect="non-scaling-stroke"
                  stroke="#4A5568"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </dt>
          <dt className={`mt-2 text-sm ${showFaq[2] ? null : "hidden"}`}>
            Somos especialistas em créditos e lutamos para conseguir o melhor
            para os seus clientes. Deixe esse trabalho para nós.
          </dt>
        </div>
      </dl>
    </section>
  );
};

export default Faq;
