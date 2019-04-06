import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import content from '../../../content/header.js'

class Header extends Component {

  render() {
    return (
      <div className={'header'}>
        <h1 className={''}>{content.headline}</h1>
        <h2 className={''}>{content.payoff}</h2>
        <a href={content.cta.url} className={'button ' + content.cta.classes}>{content.cta.text}</a>
      </div>
    );
  }
}

export default Header;
