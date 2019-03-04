import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Logo from './SVG/Logo.jsx'
// TODO:
// import Hamburger from './Hamburger'
// import MobileMenu from './MobileMenu'

class Navbar extends Component {

  render() {
    return (
      <header className={'navbar'}>

        <div className={'navbar-group'}>
          <Link to={'/'} className={'navbar-item'}>
            <Logo className={'navbar-logo'}/>
          </Link>
        </div>

        <div className={'navbar-group navbar-menu'}>
          <Link to={'/'} className={'navbar-item'}>Test</Link>
          <Link to={'/'} className={'navbar-item'}>Menu</Link>
          <Link to={'/'} className={'navbar-item'}>Links</Link>
          {/* <Hamburger/> */}
          {/* <MobileMenu/> */}
          <Link to={'/'} className={'navbar-item button'}>Call to action</Link>
        </div>

      </header>
    );
  }
}

export default Navbar;
