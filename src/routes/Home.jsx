import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Layout from '../layout'
import HomeHeader from '../components/Home/HomeHeader.jsx'
import RadioSlider from '../components/Home/RadioSlider.jsx'

class Home extends Component {

  render() {
    return (
      <Layout>
        <HomeHeader />
        <RadioSlider />
      </Layout>
    );
  }
}

export default Home;
