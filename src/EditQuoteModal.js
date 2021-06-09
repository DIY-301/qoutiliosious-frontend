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
                       
                        
                        
<Form.Label>
<h4>New Tag :  </h4>
</Form.Label>
                        <Form.Control type="text" onChange={this.props.userTagOnChange} placeholder="Edit Tag" />

                        <Form.Label>
<h4>New Quote :  </h4>
</Form.Label>
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