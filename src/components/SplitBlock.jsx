import React, {Component} from "react";

class SplitBlock extends Component {

  render() {
    return (
      <div className={'split-block'}>
        {
          this.props.reverse
            ? <div className={'split-block__img'}>{this.props.img.url}</div>
            : null
        }
        <div
          className={'split-block__content'}
          style={
            this.props.reverse
              ? null
              : {textAlign: 'right'}
          }
          >
          <div className={'split-block__content__title'}>{this.props.title}</div>
          <div className={'split-block__content__subtitle'}>{this.props.subtitle}</div>
        </div>
        {
          this.props.reverse
            ? null
            : <div className={'split-block__img'}>{this.props.img.url}</div>
        }
    </div>
    );
  }
}

export default SplitBlock;
