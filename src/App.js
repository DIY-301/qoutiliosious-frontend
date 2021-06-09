'use strict';
import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Main from './Main';
import Login from './Login';
import Profile from './Profile';
import AboutUs from './AboutUs';
import Memes from './Memes';
import axios from 'axios';

import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";


class App extends React.Component {
constructor(props){
  super(props);
  this.state={
  show:false
}}
  shareToProfile= async(e)=>{
    const { user } = this.props.auth0;
    const quote = {
      author:e.name,
      email: user.email,
      txt: e.txt,
      tag: e.tag,
      
    }
   this.showAddAlert();
    console.log(quote);
    const newQoute = await axios.post(`${process.env.REACT_APP_SERVER}/addquote`, quote);
  }
  showAddAlert=()=>{
    this.setState({
      show:true
    })
    console.log(this.state.show);
  }
  showHideAlert=()=>{
    this.setState({
      show:false
    })
  }

  render() {

    return (
      <>
        <Router>

        
            <Header />
              <Switch>
                <Route exact path="/">
    
              <Main
              shareToProfile={this.shareToProfile}
              show={this.state.show}
              showAddAlert={this.showHideAlert}
              />
                </Route>
                <Route exact path="/Profile">

                {this.props.auth0.isAuthenticated &&
                 <Profile/>  }
               
                </Route>

                <Route exact path="/aboutUs">
                 
                <AboutUs/>
                </Route>
                <Route exact path="/memes">
                 
                <Memes/>
                </Route>
              </Switch>
            <Footer />
          

        </Router>
      
      </>
    )
  }
}

export default withAuth0(App);
