'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import "./footer.css"

class Footer extends React.Component {
  render() {
    return(
      <Navbar className="footerz" collapseOnSelect  >
      <Navbar.Brand className="fontDIY">&copy; DIY 2021</Navbar.Brand>
      <div>
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-twitter"></i>
      </div>
    </Navbar>
    )
  }
}

export default Footer;
