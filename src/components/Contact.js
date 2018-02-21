import React from 'react';

const Contact = ({ mail, phone }) => (
  <section id="contact">
    <div className="inner">
      <section style={{ width: '100%', border: 'none' }}>
        <header className="major">
          <h3>Registrate</h3>
        </header>
        <form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          method="post"
          action="/gracias"
        >
          <div style={{ display: 'none' }}>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>
          <div className="field half first">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
            />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Enviar" className="special" />
            </li>
          </ul>
        </form>
      </section>
      {/* <section className="split">
        {
          mail &&
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope" />
              <h3>Email</h3>
              <a href="mailto:hablame@lauramaestre.com">
                hablame@lauramaestre.com
              </a>
            </div>
          </section>

        }
        {
          phone &&
          <section>
            <div className="contact-method">
              <span className="icon alt fa-whatsapp" />
              <h3>Número</h3>
              <span>(+57) 000-0000</span>
            </div>
          </section>

        }
      </section> */}
    </div>
  </section>
);

export default Contact;
