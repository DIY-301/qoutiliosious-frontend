import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import MyQoutes from './MyQoutes';
import Login from './Login';
import Profile from './Profile';
import AboutUs from './AboutUs';

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
                { this.props.auth0.isAuthenticated ? <MyQoutes/> : <Login/>}

                </Route>
                <Route exact path="/profile">
                 
                <Profile/>
                </Route>
                <Route exact path="/aboutUs">
                 
                <AboutUs/>
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
