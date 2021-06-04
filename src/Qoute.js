import React from 'react'
import { Card } from 'react-bootstrap'

class Qoute extends React.Component {
      
        render() {
        let random= parseInt (0 + Math.random() * (7 - 0));
        let prArr = ['primary','secondary', 'success', 'danger', 'warning', 'info','light','dark' ];

        return (
            <div>
                
                <Card 
                    bg={prArr[random]}

                        text={prArr[random] === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="m-2"
                >
                    <Card.Header>{prArr[random]}Header </Card.Header>
                    <Card.Body>
                        <Card.Title> {this.props.name} </Card.Title>

                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
      </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
    // )

}

export default Qoute;
