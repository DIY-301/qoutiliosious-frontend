'use strict';
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button, CardGroup, Card, Carousel, OverlayTrigger, Overlay, Tooltip, Modal, Form, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';
import Qoute from './Qoute'
import './Main.css';
import App from './App'
import axios from 'axios';
import AddQouteForm from './AddQouteForm';
import EditQuote from './EditQuoteModal'
import EditQuoteModal from './EditQuoteModal';
// import { positions, Provider } from "react-alert";

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
      idx: 0
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
      qoute: deleteQoute.data
    });

  }

  editQuoteReq = async () => {
    // console.log(this.props.txt);
    let { user } = this.props.auth0;
    let idx = this.state.idx;

    const updateObj = {
      email: user.email,
      txt: this.state.changedTxt,
      tag: this.state.changedTag,
      author: user.name
    }
    console.log(updateObj)
    const updateQuote = await axios.put(`${process.env.REACT_APP_SERVER}/updatequote/${idx}`, updateObj);
    this.closeEditModal();
    this.setState({
      qoute: updateQuote.data

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

  }
  showEditModal = (idx) => {
    this.setState({
      showModal: true,
      idx: idx
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
       
        <CardGroup className="profileCards">
          <Card  >
            <Card.Img src={user.picture} />
            <Card.Body>
              <Card.Title className="userName">{user.name}</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>


        <div>
          <EditQuote
            showModal={this.state.showModal}
            closeEditModal={this.closeEditModal}
            editQuoteReq={this.editQuoteReq}
            userTagOnChange={this.userTagOnChange}
            userQuoteOnChange={this.userQuoteOnChange}
          />
          <AddQouteForm hiddenModal={this.hiddenModal} update={this.getQuotes} displayModal={this.state.displayModal} />
        </div>
        <CardGroup style={{ justifyContent: 'center', marginTop: '100px',marginBottom:'50px'}}>
          {this.state.qoute.map((item, idx) => {
            let prArr = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
            let random=parseInt(0 + Math.random() * (7 - 0));     
            return (
              <div style={{ justifyContent: 'center' }}>
                <Card className="shdow" bg={prArr[random]}  style={{ margin:'10px', width: '18rem', height: '21rem',marginRight:'30px'}}>

                  <Card.Header className='textt'>
                    <h5 style={{ color: 'black', fontWeight: 'bold' }}>{item.author}</h5>
                  </Card.Header>
                  <Card.Body >

                    <p className="my-p"> {item.txt}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button className="buttdelet" onClick={() => this.deleteQoute(idx)} variant="secondary">Delete Qoute</Button>
                    <Button className="buttdelet" onClick={() => this.showEditModal(idx)} variant="secondary">Edit quote</Button>
                  </Card.Footer>

                </Card>
              </div>
            )

          }

          )
          }
        </CardGroup>
      </>

    )
  }

}

export default withAuth0(Profile);
