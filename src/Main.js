'use strict';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Qoute from './Qoute'
import axios from 'axios'
import {Alert, CardGroup, ButtonToolbar, Button, ButtonGroup ,Carousel,Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
let buttonArr =['Peace','General','Attitude','Beauty','Best','Marriage','Men','MoM','Money','Morning','Patience','Movies','Music','Nature','Parenting','Patriotism'];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: [],
      searchQuery:'money',
    }
    this.catHandler(null)
  }
catHandler =(e)=>{
if (e){
this.setState({searchQuery:e.target.value}) }
let server=process.env.REACT_APP_SERVER;
let url=`${server}/quote?searchQuery=${this.state.searchQuery.toLowerCase()}`
console.log(this.state.searchQuery);
axios
.get(url)
.then(result=>  {
 let urlData = result.data.map(item=>{
  return item
})

this.setState({dataArr:urlData})
console.log(this.state.dataArr);
}).catch (err=>{
  console.log(err);
})

}
handleAlert=()=>{
this.setState({
  showAlert:true
})
}
closeAlert =()=>{
  this.setState({
    showAlert:false
  })
}

  render() {
    
    return (
      <>
       <div style={{ width: "80%", marginLeft: "200px" }}>
          <Carousel>

            <Carousel.Item style={{ height: "600px", width: "100%" }} interval={1000}>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/1303835/pexels-photo-1303835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item style={{ height: "600px", width: "100%" }} interval={500}>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/1995842/pexels-photo-1995842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item style={{ height: "600px", width: "100%" }}>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/4065405/pexels-photo-4065405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

        </div>
        <>
        <ButtonToolbar style={{ justifyContent: 'center', marginTop:'100px'}} aria-label="Toolbar with button groups ">
        {buttonArr.map((item,idx)=> {
          return ( <ButtonGroup key={idx} className="ml-2" aria-label="First group">

       <Button className='bi'  variant="dark" style={{ width: '6rem' , height: '3rem' , fontWeight:'bold' }} value={item} onClick={this.catHandler} >{item}</Button>
       </ButtonGroup>)
        })}
        </ButtonToolbar>
        </>
                <>
{ this.props.show &&
                   <Alert  variant="success">
                   <Alert.Heading> Shared Successfully</Alert.Heading>
                   <p>
                     Shared To your Profile Page
                   </p>
                   <hr />
                   <div className="d-flex justify-content-end">
                     <Button onClick={this.props.showAddAlert} variant="outline-success">
                        Done !! 
                                            </Button>
                   </div>
                 </Alert>
           
}
               </>
        <CardGroup style={{ justifyContent: 'center' ,marginTop:'30px'}}>
            {
              this.state.dataArr.map((item, idx) => {
                let prArr = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
                let random=parseInt(0 + Math.random() * (7 - 0));            
                return < Qoute
                key={idx}
                name={item.author}
                text={item.text}
                tag={item.tag}
                bg={prArr[random]}
                shareToProfile={this.props.shareToProfile}
                handleAlert={this.handleAlert}
                />
              })
              
            }
        </CardGroup>

      <Modal show={this.state.showAlert} onHide={this.closeAlert}>
        <Modal.Header closeButton>
          <Modal.Title>You Are Not Signed In !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click The Sign in  Button Below To Enjoy Our Features :) </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeAlert}>
            Close
          </Button>
          <Button  onClick={''}>
          <Link  >   <LoginButton/> </Link>
          </Button>

        </Modal.Footer>
      </Modal>
    
      
);

            </>
    )
  }
}


export default Main;
