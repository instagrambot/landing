import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import SocialMediaIcons from './SocialMediaIcons.jsx'
import content from '../../content/footer.js'

class Footer extends Component {

  render() {
    return (
      <footer className={'footer'}>

        <div className={'footer__column'}>
          {/* Legal */}
          <ul className={''}>
            {content.legal.map((link, index) =>
              <li key={index}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            )}
          </ul>

          {/* Copyright */}
          <div>{content.copyright}</div>
        </div>

        <div className={'footer__column'}>

          <SocialMediaIcons />

          {/* Navigation */}
          <ul className={'nav'}>
            {content.links.map((link, index) =>
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            )}
          </ul>
        </div>

      </footer>
    );
  }
}

export default Footer;
