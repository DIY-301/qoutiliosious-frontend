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

import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter 
} from "react-router-dom";


class App extends React.Component {
  render() {
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                {/* { this.props.auth0.isAuthenticated && <Login/>} */}
              <Main/>
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
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App); 
