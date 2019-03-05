import React, { Component } from "react";

import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'


class MainLayout extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className={"footer-sticky"}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }

}

export default MainLayout;
