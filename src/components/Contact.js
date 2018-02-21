import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class Contact extends Component {
  state = {
    disabled: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ disabled: true });
    const { pathname } = this.props;
    const { disabled, ...fields } = this.state;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': pathname, ...fields }),
    }).then(({ status, ...rest }) => {
      if (status === 200) {
        this.setState({
          name: '',
          email: '',
        });

        console.log(rest);

        navigateTo('/gracias');
      }
    });
  };

  render() {
    const { pathname } = this.props;

    return (
      <section id="contact">
        <div className="inner">
          <section style={{ width: '100%', border: 'none' }}>
            <header className="major">
              <h3>Registrate</h3>
            </header>
            <form
              name={pathname}
              data-netlify="true"
              netlify-honeypot="bot-field"
              method="post"
              action="/gracias/"
              onSubmit={this.handleSubmit}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Enviar"
                    className="special"
                    disabled={this.state.disabled}
                  />
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
