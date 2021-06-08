import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { render } from '@testing-library/react';

class editQuoteModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


   

    handleClose = () => {


        this.setState({
            setShow: false,


        })

    }
    render() {

        return (
            <>

                <Modal show={this.props.showModal} onHide={this.props.closeEditModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>make your edits !!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Original Tag :  {this.props.tag}</h4>
                        <h4>Original Quote : </h4>
                        <p>{this.props.txt}</p>

                        <Form.Control type="text" onChange={this.props.userTagOnChange} placeholder="Edit Tag" />
                        <Form.Control onChange={this.props.userQuoteOnChange} type="text" placeholder="Edit Quote" />


                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeEditModal}>
                            Close
            </Button>
                        <Button variant="primary" onClick={this.props.editQuoteReq}>
                            Save Changes
            </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
};

export default withAuth0(editQuoteModal);