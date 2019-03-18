import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Layout from '../layout'
import Header from '../components/Home/Header.jsx'
import Features from '../components/Home/Features.jsx'
import RadioSlider from '../components/Home/RadioSlider.jsx'

import MailCta from '../components/MailCta.jsx'


class Home extends Component {

  render() {
    return (
      <Layout>
        <Header />
        <div className={"screenshot"}></div>
        <Features />
        <RadioSlider />


        {/* <MailCta /> */}
      </Layout>
    );
  }
}

export default Home;
