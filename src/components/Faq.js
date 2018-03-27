import React from 'react';

const Faq = ({ color, questions = [] }) => {
  return (
    <section id="faq" className={color}>
      <div className="inner">
        <header>
          <h2>Preguntas frecuentes</h2>
        </header>
        <ul className="alt row">
          {questions.map(({ question, answer }) => (
            <li>
              <h3>{question}</h3>
              <p>{answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
