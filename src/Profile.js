import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Carousel } from 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap';
import { Overlay, Tooltip } from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';
import AddQouteForm from './AddQouteForm';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tag: '',
      displayModal: false,
      showCards: false,
      qoute :[]
    }
  }

  showModal = () => {

    this.setState({
      displayModal: true
    })

  }
  hiddenModal = () => {

    this.setState({
      displayModal: false,
    })

  }


  render() {
    const { user } = this.props.auth0;
    return (
      <>

<AddQouteForm  hiddenModal={this.hiddenModal} displayModal={this.state.displayModal} />

<Jumbotron>
  <h1>Hello in Your profile page</h1>
  <p>
 Here you can see all your Favaourte Qoutes .
 and You can add new qoutes from your own .
  </p>
  
  <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', padding: '2rem' }}>
      
    
  <Card className="Cards" style={{ width: '12rem' }}>
            <Card.Img variant="top" src={user.picture} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
  <p>
  <Button className="button" onClick={this.showModal} variant="outline-secondary">Add new Qoute</Button>{' '}
  </p>
  </div><br></br><br></br><br></br>
</Jumbotron>

        <div>

        {this.state.qoute.map((item, idx) => {
          <Card style={{ width: '18rem' }} className="mb-2"
          >
            <Card.Header> {this.item.tag}</Card.Header>
            <Card.Body>
              <Card.Text>
                {this.item.text}
              </Card.Text>
            </Card.Body>
          </Card>
        
  }
        )}
  
{/* )); */}
</div>

        <Carousel className="carouselCards">
          <Carousel.Item style={{ width: '20rem' }}>
            <img
              className="d-block w-100 mr-3"
              src="https://images.pexels.com/photos/6230972/pexels-photo-6230972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="First slide"
            />
      
          </Carousel.Item>
          <Carousel.Item style={{ width: '20rem' }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item style={{ width: '20rem' }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
            />


          </Carousel.Item>
        </Carousel>
      </>


    )
  }
}


export default withAuth0(Profile);
