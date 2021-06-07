'use strict';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return(
      <Navbar className='nav' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='header'>Qoutiliosious</Navbar.Brand>
        <div className='container'>
        <Link className='navLinks' to="/">Home</Link>
          <Link className='navLinks' to="/profile">Profile</Link>
          <Link className='navLinks' to="/memes">Memes</Link>

          <Link className='navLinks' to="/aboutUs">About Us</Link>
          <Link className='navButton' > { this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}</Link>
        </div>
         
         
      </Navbar>
    )
  }
}

export default withAuth0(Header);
