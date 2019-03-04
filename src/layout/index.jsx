import React, { Component } from "react";

import Navbar from '../components/Navbar.jsx'
import MailCta from '../components/MailCta.jsx'
import Footer from '../components/Footer.jsx'


class MainLayout extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className={"footer-sticky"}>
        <Navbar />
        <main>{children}</main>
        <MailCta />
        <Footer />
      </div>
    );
  }

}

export default MainLayout;
