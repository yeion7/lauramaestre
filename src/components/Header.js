import React from 'react';
import Link from 'gatsby-link';
import logo from '../assets/images/logo_full.svg';

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <img src={logo} alt="logo" width="220px" style={{ padding: '5px' }} />
    </Link>
    {props.withMenu && (
      <nav>
        <a
          className="menu-link"
          onClick={props.onToggleMenu}
          href="javascript:;"
        >
          Menu
        </a>
      </nav>
    )}
  </header>
);

Header.propTypes = {
  onToggleMenu: React.PropTypes.func,
};

export default Header;
