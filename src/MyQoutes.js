import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyQoutes.css';

class MyQoutes extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>Qoutiliosious</h1>
        <p>
          This is a collection of my qoutes.
        </p>
      </Jumbotron>
    )
  }
}

export default MyQoutes;
