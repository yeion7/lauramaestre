import React from 'react';
import Link from 'gatsby-link';
import '../assets/scss/main.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  render() {
    const { children, location } = this.props;
    const { pathname } = location;

    const isEvent = /eventos/g.test(pathname);

    return (
      <div
        className={`body ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}
      >
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} withMenu={!isEvent} />
          {children()}
          <Contact pathname={pathname} />
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    );
  }
}

export default Template;
