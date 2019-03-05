import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class MailCta extends Component {

  render() {
    return (
      <div className={'mail-cta'}>
        <div className={"mail-cta__title"}>Get the latest updates</div>

        <form className={"mail-cta__form"}>
          <input
            placeholder={"Your best mail.."}
          />
          <button className={"button btn-secondary"}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MailCta;
