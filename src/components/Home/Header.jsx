import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import content from '../../../content/header.js'

class Header extends Component {

  render() {
    return (
      <div className={'header'}>
        <h1 className={''}>{content.headline}</h1>
        <h2 className={''}>{content.payoff}</h2>
        <Link to={content.cta.url} className={'button ' + content.cta.classes}>{content.cta.text}</Link>
      </div>
    );
  }
}

export default Header;
