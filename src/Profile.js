'use strict';
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button, CardGroup, Card, Carousel, OverlayTrigger, Overlay, Tooltip, Modal, Form, Jumbotron } from 'react-bootstrap';
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
      qouteArr: [],
      server : process.env.REACT_APP_SERVER,
      
    }
  }






componentDidMount = async () =>
{
  const { user } = this.props.auth0;

  
  const myQouteArr = `${this.state.server}/getquote?email=${user.email}`;

  const reqFromBack= await axios.get(myQouteArr);
  console.log(reqFromBack.data);


  

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



      

        <AddQouteForm hiddenModal={this.hiddenModal} displayModal={this.state.displayModal} />

        <Jumbotron className="jumb">

          <h1>Hello {user.name} in Your profile page</h1>
          <p>
            in your profile here you can find your favorite quotes
          </p>


        </Jumbotron>



        <Jumbotron className="picJumb">
          <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', padding: '2rem' }}>

            <div style={{ backgroundColor: "#eb5e0b", opacity: '5', marginLeft: '', height: '500px', width: '115px' }}> <p></p></div> {/* yellow figure */}

            <div className="profImg">
              <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="img-rounded" alt="Cinque Terre" />
            </div>

            <div style={{ backgroundColor: "#eb5e0b", marginLeft: '', height: '115px', width: '900px' }}> <p></p></div>

            {/* 
<Card className="Cards" style={{ width: '12rem' }}>
  <Card.Img variant="top" src={user.picture} />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
    </Card.Text>
  </Card.Body>
</Card> */}
            <Card className="Cards" style={{ width: '12rem' }}>
              

              <Card.Body style={{marginBottom:'300px'}}>
                <Card.Title>
                  
                </Card.Title>
                
                <Button    onClick={this.showModal} variant="outline-secondary">Add new Quote</Button>
                
              </Card.Body>
            </Card>

           

          </div>
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
