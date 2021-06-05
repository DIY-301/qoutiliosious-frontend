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
                        style={{ width: '18rem' , height:'21rem'}}
                        className="m-2"
                >
                    <Card.Header>
                        <h5   style={{color:'black', fontWeight:'bold'}}>{this.props.name}</h5>
                        </Card.Header>
                    <Card.Body>
                        <Card.Text className='' style={{  color:'black', fontSize:'18px' }}> <p style={{  color:'black', fontSize:'16px',overflow:'auto' ,paddingBottom:'5px' }}>{this.props.text}</p> </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
    // )

}

export default Qoute;
