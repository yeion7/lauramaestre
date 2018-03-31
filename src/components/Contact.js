import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import jsonp from 'jsonp';

const URL = 'https://lauramaestre.us16.list-manage.com/subscribe/post-json';
const U = 'ffd8f074d02b589b5c25cb05c';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class Contact extends Component {
  state = {
    disabled: false,
    error: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ disabled: true });
    const { listID } = this.props;
    const { disabled, ...fields } = this.state;

    jsonp(
      `${URL}?u=${U}&amp;id=${listID}&${encode(fields)}`,
      { param: 'c' },
      (error, { result }) => {
        switch (result) {
          case 'error':
            this.setState({ disabled: false, error: true });
            break;
          case 'success':
            navigateTo('/gracias');
            break;
          default:
            this.setState({ disabled: false });
        }
      }
    );
  };

  render() {
    const { title = 'Dejanos tu duda', expanded = false } = this.props;

    return (
      <section id="contact">
        <div className="inner">
          <section style={{ width: '100%', border: 'none' }}>
            <header className="major">
              <h3>{title}</h3>
            </header>
            <form method="post" action="/gracias/" onSubmit={this.handleSubmit}>
              <div style={{ display: 'none' }}>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </div>
              <div className="field half first">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="LNAME"
                  id="name"
                  autoComplete="name"
                  required
                  placeholder="Tu nombre"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field half">
                <label htmlFor="email">Correo</label>
                <input
                  type="email"
                  name="EMAIL"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="tucorreo@gmail.com"
                  onChange={this.handleChange}
                />
              </div>
              {expanded && (
                <div className="12u">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tu duda"
                    rows="6"
                  />
                </div>
              )}
              {this.state.error && (
                <small style={{ color: 'red' }}>
                  Ha ocurrido un error, intentalo nuevamente o contactame
                </small>
              )}
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Enviar"
                    className="special"
                    disabled={this.state.disabled}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=573214866637"
                    className="button icon fa-whatsapp"
                  >
                    Contactar
                  </a>
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
  }
}

export default Contact;
