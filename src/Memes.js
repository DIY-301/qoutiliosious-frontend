import axios from 'axios';
import React from 'react';
import { Form, Button, NavDropdown, Container, Navbar, Nav, Card, CardGroup, fullscreen, Modal } from 'react-bootstrap';

let memesArr = ['10-Guy', 'Angry-Baby', 'Business-Cat', 'Disaster-Girl', 'Ace-Primo', 'Advice-Dog', 'Yao-Ming', 'Warning-Sign', 'Waiting-Skeleton', 'Woah-Kitty'];

let memesArr2 = [ 'Why-Is-The-Rum-Gone','Snoop','Smiling-Cat','Shocked-Ape','Shaq-Only-Smokes-The-Dankest','Shouter','Shrek-Cat','Sponegebob-Coffee','Spiderman-Camera','Spangles'];

let memesArr3 =['Squidward','Stoner-PhD','Success-Kid-Girl','Success-Kid-Original','So-Much-Drama','Sad-Baby','Roll-Safe-Think-About-It','Scooby-Doo','Scared-Cat','Scary-Harry']
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
         <div style={{width:'500px', marginLeft:'590px' ,marginBottom:'20px'}}>
                <Form onSubmit={this.submitter}>

                    <Form.Group className="mb-3" controlId="abcc">

                        <Form.Control onChange={this.getTop} type="text" placeholder="TOP TEXT" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="abc">

                        <Form.Control onChange={this.getBotton} type="text" placeholder="BOTTOM TEXT" />
                    </Form.Group>
                    <Button style={{width:'150px',height:'50px', marginLeft:'160px'}} variant="primary" type="submit">
                        Submit
  </Button>
                </Form>

         </div>

         <div style={{marginTop:"-220px",padding:'10px',marginLeft:'120px'}}>
             <img style={{height:'200px',marginBottom:'5px',width:'300px'}} src='https://apimeme.com/meme?meme=Scary-Harry&top=DIY+MEMES&bottom=Yahia+!!!'>
             </img>
         </div>

         <div style={{marginTop:"-227px",padding:'10px',marginLeft:'1250px'}}>
             <img style={{height:'200px',marginBottom:'5px',width:'300px'}} src='https://apimeme.com/meme?meme=Peter-Griffin-News&top=&bottom=Project+week+news'>
             </img>
         </div>

         


           

                    {<CardGroup style={{ width: '100%' ,marginBottom:'10px'}}>
                        {memesArr.map((item, idx) => {
                            return (
                                <Card key={idx} value={`${item}`} onClick={() => this.getType({ e: item })} >
                                    <Card.Img variant="top" src={`https://apimeme.com/meme?meme=${item}`} style={{ height: '10rem', padding: "5px"}} />

                                </Card>
                            )
                        })}
                    </CardGroup>}
                    {<CardGroup style={{ width: '100%', marginBottom:'10px' }}>
                        {memesArr2.map((item, idx) => {
                            return (
                                <Card key={idx} value={`${item}`} onClick={() => this.getType({ e: item })} >
                                    <Card.Img variant="top" src={`https://apimeme.com/meme?meme=${item}`} style={{ height: '10rem', padding: "5px"}} />

                                </Card>
                            )
                        })}
                    </CardGroup>}

                    {<CardGroup style={{ width: '100%', marginBottom:'10px' }}>
                        {memesArr3.map((item, idx) => {
                            return (
                                <Card key={idx} value={`${item}`} onClick={() => this.getType({ e: item })} >
                                    <Card.Img variant="top" src={`https://apimeme.com/meme?meme=${item}`} style={{ height: '10rem', padding: "5px"}} />

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
