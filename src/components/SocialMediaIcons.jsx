import React, {Component} from "react"
import { Link } from 'react-router-dom'

import {
  FaTelegramPlane,
  FaGithub,
  FaMediumM,
  FaInstagram
} from 'react-icons/fa'

class SocialMediaIcons extends Component {

  render() {
    return (
      <ul className={'social-media-icons'}>
        <li>
          <Link to={'/'} className={'social --fb'}>
            <FaTelegramPlane/>
          </Link>
        </li>

        <li>
          <Link to={'/'} className={'social --gh'}>
            <FaGithub/>
          </Link>
        </li>

        <li>
          <Link to={'/'} className={'social --md'}>
            <FaMediumM/>
          </Link>
        </li>

        <li>
          <Link to={'/'} className={'social --ig'}>
            <FaInstagram/>
          </Link>
        </li>
      </ul>
    );
  }
}

export default SocialMediaIcons;
