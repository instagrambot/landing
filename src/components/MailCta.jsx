import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'

class MailCta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div className={'mail-cta'}>
        <div className={"mail-cta__title"}>Get the latest updates</div>
        <div className={"buttons"}>
          <Link
            to={'#'}
            className={'button'}
            onClick={() => this.setState({ show: true })}>
            Join newsletter
          </Link>

          {/* <Link to={'#'} className={'button btn-simple'}>Read stories</Link> */}

          <SweetAlert
            show={this.state.show}
            title="Get the latest news"
            text=""
            type="input"
            inputType="mail"
            inputPlaceholder="You best mail"
            onConfirm={inputValue => {
              console.log(inputValue);
              this.setState({ show: false });
            }}
          />
         </div>
      </div>
    );
  }
}

export default MailCta;
