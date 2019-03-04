import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import content from '../../content/footer.js'

class Footer extends Component {

  render() {
    return (
      <footer className={'footer'}>

        <div className={'footer__menu'}>
          {content.menu.map((column, index) =>
            <div key={index} className={"footer__menu__column"}>
              <div className={"footer__heading"}>{column.title}</div>
              <ul>
                {column.links.map((link, index) =>
                  <li key={index}>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className={'footer__copyright'}>{content.copyright}</div>
      </footer>
    );
  }
}

export default Footer;
