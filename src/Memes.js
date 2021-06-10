import axios from 'axios';
import React from 'react';
import './profile.css';
import { Form, Button, NavDropdown, Container, Navbar, Nav, Card, CardGroup, fullscreen, Modal } from 'react-bootstrap';

let memesArr = ['10-Guy', 'Angry-Baby', 'Business-Cat', 'Disaster-Girl', 'Ace-Primo', 'Advice-Dog', 'Yao-Ming', 'Warning-Sign', 'Waiting-Skeleton', 'Woah-Kitty'];

let memesArr2 = ['Why-Is-The-Rum-Gone', 'Snoop', 'Smiling-Cat', 'Shocked-Ape', 'Shaq-Only-Smokes-The-Dankest', 'Shouter', 'Shrek-Cat', 'Sponegebob-Coffee', 'Spiderman-Camera', 'Spangles'];

let memesArr3 = ['Squidward', 'Stoner-PhD', 'Success-Kid-Girl', 'Success-Kid-Original', 'So-Much-Drama', 'Sad-Baby', 'Roll-Safe-Think-About-It', 'Scooby-Doo', 'Scared-Cat', 'Scary-Harry'];

let memesArr4 = ['Persian-Cat-Room-Guardian-Single', 'Right-In-The-Childhood', 'Rick', 'Putin', 'Psy-Horse-Dance', 'Picard-Wtf', 'Pothead-Fry', 'Pissed-Off-Obama', 'Pinky-and-the-Brain', 'Question-Rage-Face']
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
        event.target.reset();
        this.setState({
            bottomText:'',
            topText:''
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

                <div style={{ marginLeft: '400px', padding: '20px' }}>
                    <img style={{ height: '350px', marginBottom: '5px', width: '400px' }} src='https://apimeme.com/meme?meme=Scary-Harry&top=DIY+MEMES&bottom='>
                    </img>
                    <img style={{ height: '350px', marginBottom: '5px', width: '400px', marginLeft: '60px' }} src='https://apimeme.com/meme?meme=Peter-Griffin-News&top=&bottom=Project+week+news'>
                    </img>
                    <img style={{ height: '350px', marginBottom: '5px', width: '400px', marginLeft: '60px' }} src='https://apimeme.com/meme?meme=Right-In-The-Childhood&top=Yahia&bottom=Feeling'>
                    </img>

                </div>
                <Form  className="fform" style={{ width: '650px', marginLeft: '700px', marginBottom: '20px',  padding: '20px' }} onSubmit={this.submitter}>

                    <Form.Group className="mb-4" controlId="abcc">

                        <Form.Label style={{ marginLeft: '30px', fontWeight: 'bold', fontSize: '25px' }}>
                            MEMES GENERATOR
</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="abcc">

                        <Form.Control onChange={this.getTop} type="text" placeholder="TOP TEXT" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="abc">

                        <Form.Control onChange={this.getBotton} type="text" placeholder="BOTTOM TEXT" />
                    </Form.Group>
                    <Button className='submitButton' style={{ width: '150px', height: '50px', marginLeft: '60px' }}  type="submit">
                        Submit
  </Button>

                </Form>



                {<CardGroup style={{ width: '100%', marginBottom: '10px' }}>
                    {memesArr.map((item, idx) => {
                        return (
                            <Card key={idx} value={`${item}`} onClick={() => this.getType({ e: item })} >
                                <Card.Img variant="top" src={`https://apimeme.com/meme?meme=${item}`} style={{ height: '10rem', padding: "5px" }} />

                            </Card>
                        )
                    })}
                </CardGroup>}
                {<CardGroup style={{ width: '100%', marginBottom: '10px' }}>
                    {memesArr2.map((item, idx) => {
                        return (
                            <Card key={idx} value={`${item}`} onClick={() => this.getType({ e: item })} >
                                <Card.Img variant="top" src={`https://apimeme.com/meme?meme=${item}`} style={{ height: '10rem', padding: "5px" }} />

                            </Card>
                        )
                    })}
                </CardGroup>}

                {<CardGroup style={{ width: '100%', marginBottom: '10px' }}>
                    {memesArr3.map((item, idx) => {
                        return (
                            <Card key={idx} value={`${item}`} onClick={() => this.getType({ e: item })} >
                                <Card.Img variant="top" src={`https://apimeme.com/meme?meme=${item}`} style={{ height: '10rem', padding: "5px" }} />

                            </Card>
                        )
                    })}
                </CardGroup>}

                {<CardGroup style={{ width: '100%', marginBottom: '10px' }}>
                    {memesArr4.map((item, idx) => {
                        return (
                            <Card key={idx} value={`${item}`} onClick={() => this.getType({ e: item })} >
                                <Card.Img variant="top" src={`https://apimeme.com/meme?meme=${item}`} style={{ height: '10rem', padding: "5px" }} />

                            </Card>
                        )
                    })}
                </CardGroup>}

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >

                    <Modal.Header closeButton>

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
