import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Layout from '../layout'
import Header from '../components/Home/Header.jsx'
import Features from '../components/Home/Features.jsx'
// import RadioSlider from '../components/Home/RadioSlider.jsx'
import Requirements from '../components/Home/Requirements.jsx'
import SplitBlock from '../components/SplitBlock'


import MailCta from '../components/MailCta.jsx'

import gettingStarted from '../../content/gettingStarted.js'


class Home extends Component {

  render() {
    return (
      <Layout>
        <Header />
        <div className={"screenshot"}></div>

        {/* <RadioSlider /> */}
        {/* <Requirements /> */}

        {gettingStarted.map((item, index) =>
          <SplitBlock
            key={index}
            reverse={item.reverse}
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
          />
        )}

        <Features />


        <MailCta />
      </Layout>
    );
  }
}

export default Home;
