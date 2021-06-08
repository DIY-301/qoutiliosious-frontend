'use strict';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Main.css';
import Qoute from './Qoute'
import axios from 'axios'
import Profile from './Profile'
import { CardGroup, ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';
let buttonArr =['Peace','General','Attitude','Beauty','Best','Marriage','Men','MoM','Money','Morning','Patience','Movies','Music','Nature','Parenting','Patriotism','Motivational'];
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
// e.preventDefault();
if (e){
this.setState({searchQuery:e.target.value}) }
let server=process.env.REACT_APP_SERVER;
// https://goquotes-api.herokuapp.com/api/v1/all?type=tag&val=${this.state.searchQuery}
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
 
  

  render() {
    return (
      <>
     
      <Jumbotron>
        <h1>Qoutilicious</h1>
        <p>
          This is a collection of my qoutes.
        </p>
        <>

  
  

        <ButtonToolbar  aria-label="Toolbar with button groups">
        {buttonArr.map((item,idx)=> {
          return (<ButtonGroup key={idx} className="ml-2" aria-label="First group">
       <Button  style={{ width: '6rem' , height: '3rem' , fontWeight:'bold' }} value={item} onClick={this.catHandler} >{item}</Button>
       </ButtonGroup>)
        })}
        </ButtonToolbar>
        </>
        <CardGroup className='mr-2'>
            {
              this.state.dataArr.map((item, idx) => {
                return < Qoute
                key={idx}
                name={item.author}
                text={item.text}
                tag={item.tag}
                shareToProfile={this.props.shareToProfile}
                
                />
              })
            }
        </CardGroup>
      </Jumbotron>

            </>
    )
  }
}


export default Main;
