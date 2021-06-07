import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button,CardGroup, Card, Carousel,OverlayTrigger, Overlay, Tooltip ,Modal,Form,Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'
import Qoute from './Qoute'
import Main from './Main';
import App from './App'
import axios from 'axios';
import AddQouteForm from './AddQouteForm';

  

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tag: '',
      displayModal: false,
      showCards: false,
      qoute: [],
      qouteArr: []
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
  renderData = (data) => {
    console.log(data.qoute, 'FromProfile');

    this.setState({
      qouteArr: data.qoute,
    });
  }


  render() {
    const { user } = this.props.auth0;
    return (
//  {/* فادي مر من هنا  */}
      <>
      {/* {this.props.qoutedData.map(item=>{
        
        return ( 
         <CardGroup className='mr-3'>
       <Card border="secondary"  style={{ width: '18rem', height: '21rem'}}
       className="m-2">
    <Card.Header>{item.author}</Card.Header>
    <Card.Body>
      <Card.Text>
        {item.text}
      </Card.Text>
    </Card.Body>
  </Card>)
    </CardGroup>
      )})} */}
{/* فادي مر من هنا */}

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
        <AddQouteForm renderData={this.renderData} hiddenModal={this.hiddenModal} displayModal={this.state.displayModal} />

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
              <div>

                {/* <Tooltip id="button-tooltip" {...props}>
    Simple tooltip
  </Tooltip>
  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger> */}

              </div>
              <Button className="button" onClick={this.showModal} variant="outline-secondary">Add new Qoute</Button>{' '}
            </p>

          </div><br></br><br></br><br></br>
        </Jumbotron>




        <div>

          {this.state.qouteArr.map((item, idx) => {
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

           ));
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
