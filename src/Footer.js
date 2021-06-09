'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import "./footer.css"

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends React.Component {
  render() {
    return(

<MDBFooter  className="footermd">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">D.I.Y</h5>
          </MDBCol>
          <MDBCol  className="iconsfooter">

             <i class="fab fa-facebook-square fa-3x"></i>
       <i class="fab fa-instagram fa-3x"></i>
      <i class="fab fa-twitter  fa-3x"></i>
         
          </MDBCol>
           <MDBCol className="lonks">
            <h5 className="titlese">Services</h5>
            <ul >
              <li>
                <a href="#!">AboutUS</a>
              </li>
              <li >
                <a href="#!">Home</a>
              </li>
              <li >
                <a href="#!">Memes</a>
              </li>
          
            </ul>
          </MDBCol>
        </MDBRow>
       
        <MDBContainer  className="copyrightt">
          &copy; {new Date().getFullYear()} <a href="https://www.mdbootstrap.com"> quotiliosious.com </a>
        </MDBContainer>
   
      </MDBContainer>
   
    </MDBFooter>

    )
  }
}



export default Footer;
