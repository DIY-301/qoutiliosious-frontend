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
    this.closeEditModal();
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


  render() {
    const { user } = this.props.auth0;
    return (
      
      <>
<div style={{width:"80%",marginLeft:"250px"}}>
<Carousel>
  
  <Carousel.Item   style={{height:"600px", width:"100%"}} interval={1000}>
  <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1303835/pexels-photo-1303835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
            />
  
  </Carousel.Item>
  <Carousel.Item    style={{height:"600px", width:"100%"}}interval={500}>
  <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1995842/pexels-photo-1995842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
            />
   
  </Carousel.Item>
  <Carousel.Item  style={{height:"600px", width:"100%"}}>
  <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/4065405/pexels-photo-4065405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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


      
        <EditQuote
          showModal={this.state.showModal}
          closeEditModal={this.closeEditModal}
          editQuoteReq={this.editQuoteReq}
          userTagOnChange={this.userTagOnChange}
          userQuoteOnChange={this.userQuoteOnChange}
        />
        <AddQouteForm hiddenModal={this.hiddenModal} update={this.getQuotes} displayModal={this.state.displayModal} />

      



<div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap',padding:'4rem',marginRight :'20px',marginBottom:"40px",marginTop:"30px"}}>
   {this.state.qoute.map((item, idx) => { 
     return(
    <Card style={{marginRight:'30px'}}  className ="cardAdd"
    >
      
        <Card.Header> {item.tag}</Card.Header>
        <Card.Body>
          <Card.Text className='textt'>
            {item.txt}
          </Card.Text>
          <Button className="buttdelet" onClick={() => this.deleteQoute(idx)} variant="secondary">Delete Qoute</Button>
              <Button  className="buttdelet" onClick={() => this.showEditModal(idx)} variant="secondary">Edit quote</Button>

        </Card.Body>
      </Card>

     )
  
   }

   )}



    </div>


       


      

      </>

    )
  }

}

export default withAuth0(Profile);
