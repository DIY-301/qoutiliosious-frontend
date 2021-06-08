'use strict';
import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Main from './Main';
import Login from './Login';
import Profile from './Profile';
import AboutUs from './AboutUs';
import axios from 'axios'
import Memes from './Memes';

import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      txt: ''
    }
  }
/************************************************Share To Profile(ADD)******************************************************************** */
  shareToProfile = (data) => {
    const { user } = this.props.auth0;
    console.log(data);

    const qoute = {
      email: user.email,
      author: data.author,
      txt: data.txt,
      tag: data.tag
    }
    let server = process.env.REACT_APP_SERVER;

    axios
      .post(`${server}/addquote`, qoute)
      .then(result => {
        let newQouteData = result.data.map(item => {
              return item
        })
      }).catch(err => {console.log(err);})
  }
/************************************************************************************************************************************ */

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {/* { this.props.auth0.isAuthenticated && <Login/>} */}
              <Main
                shareToProfile={this.shareToProfile}
              />
            </Route>


            <Route exact path="/Profile">
              {this.props.auth0.isAuthenticated &&
                <Profile/>}
            </Route>




          <Route exact path="/aboutUs">
                 <AboutUs />
           </Route>

            <Route exact path="/memes">
              <Memes />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
