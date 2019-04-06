import React, {Component} from "react"
import { Link } from 'react-router-dom'

import {
  FaGithub,
  FaChrome,
  FaTelegramPlane,
  FaMediumM
} from 'react-icons/fa'

class SocialMediaIcons extends Component {

  render() {
    return (
      <ul className={'social-media-icons'}>
        <li>
          <a href={'https://github.com/instagrambot/'} className={'social --gh'}>
            <FaGithub/>
          </a>
        </li>

        <li>
          <a href={'https://chrome.google.com/webstore/detail/gram-up/njonkbhnmmjgancfbncekpgkmidhbbpo'} className={'social --ch'}>
            <FaChrome/>
          </a>
        </li>

        <li>
          <a href={'https://t.me/instabotproject'} className={'social --fb'}>
            <FaTelegramPlane/>
          </a>
        </li>

        <li>
          <a href={'/'} className={'social --md'}>
            <FaMediumM/>
          </a>
        </li>
      </ul>
    );
  }
}

export default SocialMediaIcons;
