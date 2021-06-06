import axios from 'axios';
import React from 'react';
import { Form, Button, NavDropdown, Container, Navbar, Nav, Card, CardGroup, fullscreen, Modal } from 'react-bootstrap';

let memesArr = ['10-Guy', 'Angry-Baby', 'Business-Cat', 'Disaster-Girl', 'Ace-Primo', 'Advice-Dog', 'Yao-Ming', 'Warning-Sign', 'Waiting-Skeleton', 'Woah-Kitty', 'Why-Is-The-Rum-Gone']

class Memes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memes: {},
            memesType: '',
            topText: '',
            bottomText: '',
            title: 'Choose your character',
            show: false
        }
    }


    getTop = (e) => {
        this.setState({
            topText: e.target.value,

        })

    }

    getBotton = (e) => {
        this.setState({
            bottomText: e.target.value,

        })

    }

    getType = (e) => {
        this.setState({
            memesType: e.e

        })
        console.log(this.state.memesType);
    }


    submitter = async (event) => {
        event.preventDefault();

        const memes = `https://apimeme.com/meme?meme=${this.state.memesType}&top=${this.state.topText}&bottom=${this.state.bottomText}`

        this.setState({
            memes: memes,
            show: true
        })

    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }
    render() {

        return (
            <>
                <Form onSubmit={this.submitter}>


                    {<CardGroup style={{ width: '100%' }}>
                        {memesArr.map((item, idx) => {
                            return (
                                <Card key={idx} value={`${item}`} onClick={() => this.getType({ e: item })} >
                                    <Card.Img variant="top" src={`https://apimeme.com/meme?meme=${item}`} style={{ height: '10rem', padding: "5px" }} />

                                </Card>
                            )
                        })}
                    </CardGroup>}


                    <Form.Group className="mb-3" controlId="abcc">

                        <Form.Control onChange={this.getTop} type="text" placeholder="TOP TEXT" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="abc">

                        <Form.Control onChange={this.getBotton} type="text" placeholder="BOTTOM TEXT" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>



                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                     
                    <Modal.Header  closeButton>

                    </Modal.Header>
                       
                    <Modal.Body>
                        <center>
{this.state.memesType}

                        </center>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={this.state.memes} />

                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
          </Button>

                    </Modal.Footer>
                </Modal>

            </>
        )
    }

}

export default Memes;
