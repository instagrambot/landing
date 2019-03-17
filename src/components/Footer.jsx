import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import { FaGithub, FaInstagram, FaMedium, FaFacebook } from 'react-icons/fa'

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
          <div className={''}>{content.copyright}</div>
        </div>

        <div className={'footer__column'}>

          {/* Social media */}
          <ul className={'social-media-icons'}>
            <li>
              <Link to={'/'} className={'social --gh'}>
                <FaGithub />
              </Link>
            </li>

            <li>
              <Link to={'/'} className={'social --ig'}>
                <FaInstagram />
              </Link>
            </li>

            <li>
              <Link to={'/'} className={'social --md'}>
                <FaMedium />
              </Link>
            </li>

            <li>
              <Link to={'/'} className={'social --fb'}>
                <FaFacebook />
              </Link>
            </li>

          </ul>

          {/* Navigation */}
          <ul className={'nav'}>
            {content.links.map((link, index) =>
              <li key={index}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            )}
          </ul>
        </div>

      </footer>
    );
  }
}

export default Footer;
