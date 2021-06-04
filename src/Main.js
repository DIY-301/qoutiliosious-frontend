import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Main.css';
import Qoute from './Qoute'
import axios from 'axios'
import { CardGroup, ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';

let buttonArr =['general','money','love','ramahiSad','Layana+1','fadi+++','romance']
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: ['FAdi', 'Mohammed', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
    }
  }
catHandler =(e)=>{
e.preventDefault();
let searchQuery=e.target.value;
let url=`https://goquotes-api.herokuapp.com/api/v1/random/10?type=tag&val=${searchQuery}`
console.log(searchQuery);
axios
.get(url)
.then(result=>  {
 let urlData = result.data.quotes.map(item=>{
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
      <Jumbotron>
        <h1>Qoutilicious</h1>
        <p>
          This is a collection of my qoutes.
        </p>
        <>
        <ButtonToolbar  aria-label="Toolbar with button groups">
        {buttonArr.map((item,idx)=> {
return (<ButtonGroup key={idx} className="ml-4" aria-label="First group">
       <Button  style={{ width: '8rem' , height: '3rem' , fontWeight:'bold' }} value={item} onClick={this.catHandler} >{item}</Button>
       </ButtonGroup>)
        })}
        </ButtonToolbar>
        </>
        <CardGroup className='ml-2'>
            {
            this.state.dataArr.map((item, idx) => {
              return < Qoute
                key={idx}
                name={item.text}

              />
            })
          }
        </CardGroup>
      </Jumbotron>

    )
  }
}


export default Main;
