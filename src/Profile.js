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




class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
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

  
  const myQouteArr = `http://localhost:3001/getquote?email=${user.email}`;

  const reqFromBack= await axios.get(myQouteArr);
  console.log(reqFromBack.data);

  this.setState({
    qoute:reqFromBack.data,
    showCards:true
  })
console.log(this.state.qoute)

}


deleteQoute = async (idx) => {
  let { user } = this.props.auth0;
  console.log(idx);

  user = { email: user.email }
  console.log(user)
  const deleteQoute = await axios.delete(`http://localhost:3001/deleteqout/${idx}`, { params: user })
console.log(deleteQoute);
  this.setState({
    qoute: deleteQoute.data
  })
  console.log(this.state.qoute);
  

}


  editQuoteCall=(data)=>{
console.log(data.txt);
this.setState({
  idx:data.idx,
  tag:data.tag,
  txt:data.txt
})

this.showEditModal();
console.log(this.state.idx);

}
showEditModal=()=>{
  this.setState({
    showModal:true,


  })
  
}

closeEditModal=()=>{
  this.setState({
    showModal:false
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


{/* <Jumbotron className="jumb">

<h1 >Hello {user.name} in Your profile page</h1>



</Jumbotron> */}





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
                <Button onClick={() => this.editQuoteCall({idx,tag:item.tag,txt:item.txt})} variant="primary">Edit quote</Button>

              </Card.Body>
            </Card>
           )
        
         }
         )}

</CardGroup>
  }
      


        <EditQuote   
        idx={this.state.idx}
        tag={this.state.tag}
        txt={this.state.txt}
        showModal={this.state.showModal}
        closeEditModal={this.closeEditModal}
        />


        <AddQouteForm hiddenModal={this.hiddenModal} displayModal={this.state.displayModal} />

      

       


          <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', padding: '2rem' }}>

      
                
                {/* <Button    onClick={this.showModal} variant="outline-secondary">Add new Quote</Button> */}
        
          </div>

      </>     

    )
  }

}

export default withAuth0(Profile);
