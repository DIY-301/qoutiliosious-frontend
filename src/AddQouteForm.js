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
        tag: '',
        displayModal: false,
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
          tag: this.state.tag,
          text: this.state.text,
    
        }
    console.log(qoute);
        // const newQoute = axios.post(`http://localhost:3001/addQoute`, qoute);
        // this.setState({
        //   qoute: await newQoute.data
        // });
        // console.log(newQoute);
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
                    <option value="1">Motivational</option>
                    <option value="2">Peace</option>
                    <option value="3">General</option>
                    <option value="4">Attitude</option>
                    <option value="5">Beauty</option>
                    <option value="6">Best</option>
                    <option value="7">Marriage</option>
                    <option value="8">Men</option>
                    <option value="9">MoM</option>
                    <option value="10">Money</option>
                    <option value="11">Morning</option>
                    <option value="12">Patience</option>
                    <option value="13">Movies</option>
                    <option value="14">Music</option>
                    <option value="15">Nature</option>
                    <option value="16">Parenting</option>
                    <option value="17">Patriotism</option>



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
