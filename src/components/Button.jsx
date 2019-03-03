import React, {Component} from 'react'

class Button extends Component {

  render() {
    return (
      <Link to={this.props.cta.url} className={'button ' + this.props.cta.classes}>
        {{this.props.cta.text}}
      </Link>
    );
  }
}

export default Button;
