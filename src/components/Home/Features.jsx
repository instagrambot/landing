import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import { FaCheck } from 'react-icons/fa'

import content from '../../../content/features.js'

class Features extends Component {

  render() {
    return (
      <div id={'features'} className={'features'}>
        <div className={'features__heading'}>Features</div>

        <div className={'features__grid'}>
          {content.map((feature, index) =>
            <div key={index} className={'feature'}>
              <div className={'icon'}><FaCheck /></div>
              <div className={'title'}>{feature.title}</div>
              <div className={'subtitle'}>{feature.subtitle}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Features;
