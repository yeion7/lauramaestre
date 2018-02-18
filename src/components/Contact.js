import React from 'react';

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field">
          <div style={{ display: 'none' }}>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>
          <div className="field half first">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Correo</label>
            <input type="text" name="email" id="email" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Enviar" className="special" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:hablame@lauramaestre.com">
              hablame@lauramaestre.com
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-whatsapp" />
            <h3>Número</h3>
            <span>(+57) 000-0000</span>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
