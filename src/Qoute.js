'use strict';
import axios from 'axios';
import React from 'react'

import { Card, Collapse, Fade,Modal,Button } from 'react-bootstrap'
import './Main.css';
import './quote.css';
import { withRouter } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';


class Qoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            author:'',
            txt:'',
            tag:'',
            qoutedData:{},
        }
    }
    setOpen = () => {
        const { user } = this.props.auth0;
        this.setState({
            open: true,
            author:this.props.name,
            txt:this.props.text,
            tag:this.props.tag
        });
    }

    setClose = () => {
        this.setState({
            open: false
        });
    }
   
      
    render() {



        let random = parseInt(0 + Math.random() * (7 - 0));
        let prArr = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
        return (
              <>

            <div style={{ justifyContent: 'center'}}>
           
                <Card className="shdow"
                  style={{ width: '18rem',paddingBottom:'30px' }}
                    bg={'secondary'}
                    text={prArr[random] === 'light' ? 'dark' : 'white'}
                    style={{ margin:'10px', width: '18rem', height: '21rem',marginRight:'100px'}}

                    onMouseEnter={this.setOpen} onMouseLeave={this.setClose}
                    aria-expanded={this.state.open}
                >
                      
         
                    <Card.Header className='textt'>
                        <h5 style={{ color: 'black', fontWeight: 'bold' }}>{this.props.name}</h5>
                    </Card.Header>
                    <Card.Body >
                        
                        <p className="my-p" > {this.props.text}</p>
                    </Card.Body>
                    <Card.Footer>
                        <Fade in={this.state.open}>
                            <div id="example-collapse-text">
                           
{ this.props.auth0.isAuthenticated ? <button  onClick={()=> this.props.shareToProfile({author:this.state.author,txt:this.state.txt,tag:this.state.tag})}>  share  </button>
                            
                              :  <button  onClick={this.props.handleAlert}>  Share  </button>}

                              
                            </div>
                                
                        </Fade>
                    </Card.Footer>
                </Card>
                </div> 
                       
    
      </>  )
    }


}

export default withAuth0(Qoute);