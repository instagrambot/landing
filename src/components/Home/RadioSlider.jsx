import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import content from '../../../content/tasks.js'

class RadioSlider extends Component {

  render() {
    return (
      <div className={'radio-slider'}>

        <section className={'slider'}>

          {
            content.map((task, index) =>
            <input
              type={'radio'}
              name={'slider'}
              id={'slide-' + index}
              checked={task.checked}
            />
          )}

          <div className={'slider__cards'}>
            {
              content.map((task, index) =>
              <label
                for={'slide-' + index}
                className={'slider__card slider__card--' + index + ' card'}
                >

                <div className={'slider__card__title'}>{task.title}</div>
                <div className={'slider__card__subtitle'}>{task.text}</div>
                <a className={'slider__card__link'} href={task.link.url}>{task.link.text}</a>

              </label>
            )}
          </div>

          <div className={'slider__bullets'}>
            {content.map((task, index) =>
              <label
                for={'slide-' + index}
                className={'slider__bullets__item slider__bullets__item--' + index}></label>
              )}
          </div>

        </section>
      </div>
    );
  }
}

export default RadioSlider;
