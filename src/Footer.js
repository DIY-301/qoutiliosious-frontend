import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
    )
  }
}

export default Footer;
