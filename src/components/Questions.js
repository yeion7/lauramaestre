import React from 'react';

const Questions = ({ color, questions = [] }) => {
  return (
    <section id="questions" className={color}>
      <div className="inner">
        <header>
          <h2>¿Has tenido alguna de estas situaciones en tu vida?</h2>
        </header>
        <ul className="alt row">
          {questions.map(({ question }) => (
            <li key={question}>
              <h3>
                <i className="fa fa-2x fa-check" style={{ color: 'white' }} />
                {question}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Questions;
