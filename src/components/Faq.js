import React from 'react';

const Faq = ({ color, questions = [] }) => {
  return (
    <section id="faq" className={color}>
      <div className="inner">
        <header>
          <h2>Preguntas frecuentes</h2>
        </header>
        <ul className="alt row">
          <li>
            <h3>¿Cuál es la metodología utilizada en el taller?</h3>
            <p>
              El taller es terapeútico y casi personalizado. Sólo tiene 6 cupos.
              Cada persona recibe terapia y se hace el correspondiente
              nacimiento a cada uno.
            </p>
          </li>
          <li>
            <h3>¿Qué es una terapia?</h3>
            <p>
              Una terapia es un proceso que utiliza la relajación y las
              emociones para ir a momentos de etapas tempranas como concepción,
              gestación y nacimiento; resentir la emoción, colocar una nueva y
              reconstruir una nueva historia.
            </p>
          </li>
          <li>
            <h3>¿Qué duración tiene el taller?</h3>
            <p>El taller dura un día de 8am-6pm.</p>
          </li>
          <li>
            <h3>¿Debo llevar comidas?</h3>
            <p>El taller incluye refrigerio mañana y tarde y almuerzo.</p>
          </li>
          <li>
            <h3>¿Qué Incluye la inversión del taller?</h3>
            <p>Incluye Refrigerios, almuerzo, certificado de nacimiento.</p>
          </li>
          <li>
            <h3>¿En qué ropa debo llevar al taller?</h3>
            <p>
              Ropa cómoda. Al final de taller se pide una prenda blanca puede
              ser completa (vestido) o camisa o pantalón; pero esta es al final.
            </p>
          </li>
          <li>
            <h3>¿Debo tener una preparación anterior al taller?</h3>
            <p>
              La única preparación es que una semana antes, se envían una ficha
              para llenar respecto a tu nacimiento y así empezar a abrir el
              inconsciente.
            </p>
          </li>
          <li>
            <h3>¿Debe ser mayor de edad para hacer el taller?</h3>
            <p>
              Se recomienda mayor de 8 años, porque antes de esta edad se debe
              hacer la terapia a los papás
            </p>
          </li>
          <li>
            <h3>¿El taller es presencial o virtual?</h3>
            <p>El evento es presencial</p>
          </li>
          <li>
            <h3>¿Qué métodos de pago existen?</h3>
            <p>Por PayU o consignación directa</p>
          </li>
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
