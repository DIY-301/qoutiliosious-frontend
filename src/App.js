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
  Route
} from "react-router-dom";


class App extends React.Component {

  render() {
    console.log('app', this.props)
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                { this.props.auth0.isAuthenticated ? <Main/> : <Login/>}

                </Route>
                <Route exact path="/profile">
                {this.props.auth0.isAuthenticated ? <Profile/> : <Login/> }
               
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
