'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends React.Component {
  render() {
    return(
      <Navbar className='footerz' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>&copy; DIY 2021</Navbar.Brand>
    </Navbar>
    )
  }
}

export default Footer;
