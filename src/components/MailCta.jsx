import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class MailCta extends Component {

  render() {
    return (
      <div className={'mail-cta'}>
        <div className={"mail-cta__title"}>Get the latest updates</div>
        <div className={"buttons"}>
          <Link to={'#'} className={'button'}>Join newsletter</Link>
          {/* <Link to={'#'} className={'button btn-simple'}>Read stories</Link> */}
        </div>
      </div>
    );
  }
}

export default MailCta;
