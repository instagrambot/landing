import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

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
        <div className={'mail-cta__title'}>Subscribe for future updates</div>
        <div className={'buttons'}>
          <Link
            to={'#'}
            className={'button'}
            onClick={() => this.setState({ show: true })}>
            Join newsletter
          </Link>

          {/* <Link to={'#'} className={'button btn-simple'}>Read stories</Link> */}

          <SweetAlert
            show={this.state.show}
            title={'Get the latest news'}
            text={''}

            type={'input'}
            inputType={'email'}
            inputPlaceholder={'Your best mail'}

            onOutsideClick={() => {
              this.setState({ show: false })
            }}
            onEscapeKey={() => {
              this.setState({ show: false })
            }}


            showCancelButton
            onCancel={() => {
              this.setState({ show: false });
            }}


            onConfirm={inputValue => {
              // TODO: Error if inputValue isn't mail
              if (inputValue === '') {
                swal.showInputError('You need to write something!');
                return;
              }
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
