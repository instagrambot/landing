import React, { Component } from "react";

class Logo extends Component {

  render() {
    return (
      <img className={this.props.className} src={"https://raw.githubusercontent.com/instagrambot/web/master/client/img/icon.png"} />
    );
  }

}

export default Logo;
