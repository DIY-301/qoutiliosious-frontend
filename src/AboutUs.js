import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class AboutUs extends Component {
  render() {
    const { user  } = this.props.auth0;
    return (
        <>
            
               <img src={user.img} alt=''/>
                    <div>Hello {user.name}</div>
                    <div>Email: {user.email}</div>

                

            
        </>
    )
  }
}

export default withAuth0(AboutUs);