import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
// import <link rel="preconnect" href="https://fonts.gstatic.com">
// import <link href="https://fonts.googleapis.com/css2?family=Pangolin&display=swap" rel="stylesheet"></link>

class Header extends React.Component {
  render() {
    return(
      <Navbar className='nav' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='header mb-5' ><Link  className='qouteLinks ' to="/">Qoutiliosious</Link></Navbar.Brand>
        <div className='container mx-auto '>
        <Link className='navLinks ' to="/">Home</Link>
          <Link className='navLinks' to="/memes">Memes</Link>
          
          <Link className='navLinks' to="/profile">Profile</Link>

          <Link className='navLinks' to="/aboutUs">About Us</Link>
        </div>
         <div>

          <Link className='navButton' > { this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}</Link>
         </div>
         
      </Navbar>
    )
  }
}

export default withAuth0(Header);
