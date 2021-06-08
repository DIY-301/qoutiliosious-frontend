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
import EditQuote from './EditQuoteModal'
import EditQuoteModal from './EditQuoteModal';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      tag: '',
      displayModal: false,
      showCards: false,
      qoute: [],
      changedTag: '',
      changedTxt: '',
      idx:0
    }
  }


  componentDidMount = () => {
    this.getQuotes();
  }


  getQuotes = async () => {
    const { user } = this.props.auth0;
    const myQouteArr = `${process.env.REACT_APP_SERVER}/getquote?email=${user.email}`;
    const reqFromBack = await axios.get(myQouteArr);
    console.log(reqFromBack.data);
    this.setState({
      qoute: reqFromBack.data,
      showCards: true
    })
    console.log(this.state.qoute)

  }

  deleteQoute = async (idx) => {
    let { user } = this.props.auth0;
    console.log(idx);
    user = { email: user.email }
    console.log(user)
    const deleteQoute = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteqout/${idx}`, { params: user })
    this.setState({
    qoute:deleteQoute.data
    });
  
  }

  editQuoteReq = async () => {
    // console.log(this.props.txt);
    let { user } = this.props.auth0;
    let idx=this.state.idx;
    
    const updateObj = {
      email: user.email,
      txt: this.state.changedTxt,
      tag: this.state.changedTag,
      author: user.name
    }
    console.log(updateObj)
    const updateQuote = await axios.put(`${process.env.REACT_APP_SERVER}/updatequote/${idx}`, updateObj);
    this.setState({
      qoute:updateQuote.data
    });
    this.getQuotes();
  }




  userTagOnChange = (event) => {
    event.preventDefault();
    this.setState({
        changedTag: event.target.value
    })
    console.log(this.state.changedTag);
}

userQuoteOnChange = (event) => {
    event.preventDefault();
    this.setState({
      changedTxt: event.target.value
    })

    console.log(this.state.changedQuote);
}
  showEditModal = (idx) => {
    this.setState({
      showModal: true,
      idx:idx
    })
  }
  closeEditModal = () => {
    this.setState({
      showModal: false
    })
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
<div style={{width:"80%",marginLeft:"250px"}}>
<Carousel>
  
  <Carousel.Item   style={{height:"600px", width:"100%"}} interval={1000}>
  <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
            />
  
  </Carousel.Item>
  <Carousel.Item    style={{height:"600px", width:"100%"}}interval={500}>
  <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
            />
   
  </Carousel.Item>
  <Carousel.Item  style={{height:"600px", width:"100%"}}>
  <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
            />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
<CardGroup className="profileCards">
<Card  >
            <Card.Img  src={user.picture} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>

</CardGroup>




      {this.state.showCards &&

      <CardGroup>
         {this.state.qoute.map((item, idx) => { 
           return(

          <Card style={{ width: '18rem' }} className="mb-2">
            
              <Card.Header> {item.tag}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {item.txt}
                </Card.Text>
                <Button onClick={() => this.deleteQoute(idx)} variant="primary">Delete Qoute</Button>
                    <Button onClick={() => this.showEditModal(idx)} variant="primary">Edit quote</Button>

              </Card.Body>
            </Card>
           )
        
         }
         )}

</CardGroup>
  }
      
        <EditQuote
          showModal={this.state.showModal}
          closeEditModal={this.closeEditModal}
          editQuoteReq={this.editQuoteReq}
          userTagOnChange={this.userTagOnChange}
          userQuoteOnChange={this.userQuoteOnChange}
        />
        <AddQouteForm hiddenModal={this.hiddenModal} update={this.getQuotes} displayModal={this.state.displayModal} />

      

       


      

      </>

    )
  }

}

export default withAuth0(Profile);
