import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'

class Home extends Component {

  render() {
    return (
      <div id={'home'}>
        <Navbar />

        Test Home
      </div>
    );
  }
}

export default Home;
