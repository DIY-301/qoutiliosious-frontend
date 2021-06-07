import React from 'react'
import { Card, Collapse, Fade } from 'react-bootstrap'
import './Main.css';
class Qoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    setOpen = () => {
        this.setState({
            open: true
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
            <div>
                <Card
                    bg={prArr[random]}
                    text={prArr[random] === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem', height: '21rem' }}
                    className="m-2"
                    onMouseEnter={this.setOpen} onMouseLeave={this.setClose}
                    aria-controls="example-collapse-text"
                    aria-expanded={this.state.open}
                >
                    <Card.Header>
                        <h5 style={{ color: 'black', fontWeight: 'bold' }}>{this.props.name}</h5>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className='' style={{ color: 'black', fontSize: '18px' }}> <p style={{ color: 'black', fontSize: '16px', overflow: 'auto', paddingBottom: '5px' }}>{this.props.text}</p> </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Fade in={this.state.open}>
                            <div id="example-collapse-text">
                                <button>share</button>
                            </div>
                        </Fade>
                    </Card.Footer>
                </Card>

            </div>
        )
    }
    // )

}

export default Qoute;
