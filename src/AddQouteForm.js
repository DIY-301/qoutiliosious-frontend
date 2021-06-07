import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { render } from '@testing-library/react';


class AddQouteForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        tag: 'Motivational',
        displayModal: false,
        qoute :[],  
      }
    }


    updateTag = (event) => {
        this.setState({
          tag: event.target.value
        })
        console.log(this.state.tag);
      }
    
    
      updateText = (event) => {
        this.setState({
          text: event.target.value
        })
        console.log(this.state.text);
      }

    
      addQoute = async (event) => {
        event.preventDefault();
    
        const { user } = this.props.auth0;
        const qoute = {
    
          email: user.email,
          author: user.name,
          tag: this.state.tag,
          txt: this.state.text,
    
        }
    console.log(qoute);
        const newQoute = await axios.post(`http://localhost:3300/addquote`, qoute);
    
        console.log(newQoute);
        this.props.hiddenModal();
      }





render() {
    const { user } = this.props.auth0;
    return (  

      
        <div>
          <Modal show={this.props.displayModal} onHide={this.props.hiddenModal} >
            <Modal.Header closeButton>
              <Modal.Title>Add New Qoute </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form   >
          
                <Form.Group>
                  <Form.Label>text</Form.Label>
                  <Form.Control onChange={this.updateText} type='text' />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Tag</Form.Label>
                  <Form.Control as='select' onChange={this.updateTag} custom >
                    <option value="Motivational">Motivational</option>
                    <option value="Peace">Peace</option>
                    <option value="General">General</option>
                    <option value="Attitude">Attitude</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Best">Best</option>
                    <option value="Marriage">Marriage</option>
                    <option value="Men">Men</option>
                    <option value="MoM">MoM</option>
                    <option value="Money">Money</option>
                    <option value="Morning">Morning</option>
                    <option value="Patience">Patience</option>
                    <option value="Movies">Movies</option>
                    <option value="Music">Music</option>
                    <option value="Nature">Nature</option>
                    <option value="Parenting">Parenting</option>
                    <option value="Patriotism">Patriotism</option>



                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.hiddenModal}>
                Close
                       </Button>
              <Button variant="primary" type="submit" onClick={this.addQoute}>
                Add Qoute
                         </Button>
            </Modal.Footer>
          </Modal>
        </div>
        )
}
}


    export default withAuth0(AddQouteForm);
