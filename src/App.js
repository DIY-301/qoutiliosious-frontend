import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Main from './Main';
import Login from './Login';
import Profile from './Profile';
import AboutUs from './AboutUs';
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter 
} from "react-router-dom";

const { user } = this.props.auth0;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      author:'',
      txt:''
    }
  }

  shareToProfile =(data)=>{
  console.log(data);
const qoute={
  author:data.author,
  txt:data.txt
}
    //    /quote?searchQuery=${this.state.searchQuery}
    const postQouteUrl=`http://localhost:5000/addQoute(${user.email},${qoute})`
    console.log(postQouteUrl);
     axios
     .get(postQouteUrl)
        .then(result=>{
            let newQouteData= result.data.quotes.map(item=>{
                return item
              })
              this.setState({
                qoutedData:newQouteData
              })
              console.log(this.state.qoutedData);
         
            })
       .catch(err=>{
            console.log(err); })
    }
   

  render() {
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
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
                 <Profile
                 
                 qoutedData={this.state.qoutedData}
                   
                 
                 />  }
               
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
