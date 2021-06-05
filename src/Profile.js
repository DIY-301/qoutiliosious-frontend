import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <>

        {/* <img src={user.picture} alt='' /> */}
        {/* <div>Hello {user.name}</div> */}
        {/* <div>Email: {user.email}</div> */}
        <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', padding: '4rem' }}>
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={user.picture} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                {/* {user.email} */}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          {/* </div>

        <div> */}

          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                
       </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div><br></br><br></br><br></br>

        <Carousel className="carouselCards">
          <Carousel.Item style={{ width: '15rem' }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/6230972/pexels-photo-6230972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="First slide"
            />
            {/* <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
    </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item style={{ width: '15rem' }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ width: '15rem' }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </>


    )
  }
}


export default withAuth0(Profile);
