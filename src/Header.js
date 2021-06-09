'use strict';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Image ,roundedCircle } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Logo from './LoGoDiY.png'

class Header extends React.Component {
  render() {
    return(
      <>
      <Navbar className='nav' collapseOnSelect expand="lg" >
       <Link className='navLinks' to="/">
        <Navbar.Brand className='header' >
         <img width='180px' height='170' src={Logo} style={{padding:'30px',float:'left', marginTop:'-55px' ,backgroundColor:'0.0.5' }}/>
         Quotilicious
        </Navbar.Brand></Link>
        <div className='container'>
        <Link className='navLinks' to="/">Home</Link>
          <Link className='navLinks' to="/memes">Memes</Link>  
          <Link className='navLinks' to="/profile">Profile</Link>
          <Link className='navLinks' to="/aboutUs">About Us</Link>
        </div>
         <div>
          <Link className='navButton' > { this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}</Link>
         </div>
         
      </Navbar>
      </>
    )
  }
}

export default withAuth0(Header);
