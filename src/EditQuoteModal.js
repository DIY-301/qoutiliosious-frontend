import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { render } from '@testing-library/react';



class editQuoteModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            changedQuote: '',
            changedTag: '',
            updatedQuote: ''
        }
    }


    editQuoteReq = async (event) => {
        // console.log(this.props.txt);
        event.preventDefault();
        const { user } = this.props.auth0;
        const anything={
            email:user.email,
            tag:this.state.changedTag,
            txt:this.state.changedQuote
        }
        const server = process.env.REACT_APP_SERVER;
        
        this.props.closeEditModal(null);
        let result = await axios.put(`${server}/editquote/${this.props.idx}`,anything);
        console.log(result);
    }

    handleClose = () => {
        this.setState({
            setShow: false})
         }

    userTagOnChange = (event) => {
        event.preventDefault();
        this.setState({
            changedTag: event.target.value
        })
    }
    userQuoteOnChange = (event) => {
        event.preventDefault();
        this.setState({
            changedQuote: event.target.value
        })
    }

    render() {
        return (
            <>

                <Modal show={this.props.showModal} onHide={''} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>make your edits !!!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h4>Original Tag :  {this.props.tag}</h4>
                        <h4>Original Quote : </h4>
                        <p>{this.props.txt}</p>
                   <Form.Control type="text" onChange={this.userTagOnChange} placeholder="Edit Tag" />
                    <Form.Control onChange={this.userQuoteOnChange} type="text" placeholder="Edit Quote" />
                    </Modal.Body>

                    <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.closeEditModal}>
                             Close
                            </Button>
                            <Button variant="primary" onClick={this.editQuoteReq}>
                            Save Changes
                          </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
};

export default withAuth0(editQuoteModal);