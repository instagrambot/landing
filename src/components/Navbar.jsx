import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Logo from './SVG/Logo.jsx'
// TODO:
// import Hamburger from './Hamburger'
// import MobileMenu from './MobileMenu'

import content from '../../content/navbar.js'

class Navbar extends Component {

  render() {
    return (
      <header className={'navbar'}>

        <div className={'navbar-group'}>
          <Link to={'/'} className={'navbar-item navbar-logo'}>
            <Logo />
          </Link>
        </div>

        <div className={'navbar-group navbar-menu'}>
          {content.map((link, index) =>
            <Link
              key={index}
              to={link.url}
              className={'navbar-item ' + link.classes}>
              {link.text}
            </Link>
          )}
        </div>

      </header>
    );
  }
}

export default Navbar;
