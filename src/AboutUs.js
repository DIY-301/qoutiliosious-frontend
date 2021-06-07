import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import './css/fontawesome-free-5.15.3-web/css/all.min.css';
import './css/styleMini.css';
class AboutUs extends Component {
  render() {
    const { user  } = this.props.auth0;
    return (
        <>
            <div className="section pp-scrollable slide slide-services slide-dark slide-services a-slide-typed" data-name="services">
            <div className="slide-container">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <div className="animate-element delay5 fadeInUp">
                      <div className="smallerinoTextTwo title-mini text-primary">DIY</div>
                      <br className="brino" />
                      <div className="smallerinoText slide-title font-custom"><span className="text-typed a-typed a-typed-services" data-text="Technologies "></span>Technologies used to<br />craft your business.</div>
                    </div>
                    <div className=" slide-descr animate-element delay7 fadeInUp">
                      A collection of the most beautiful yet powerful tools to develop your business the way you want<strong> with a modern look and feel. </strong>
                    </div>
                    <nav className="service-list animate-element delay9 fadeInUp"></nav>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-6 orbiterLandScape">
                    <div className="orbit animate-element delay9 fadeInRight">
                      <ul className="orbit-wrap">
                        <li className="orbit-center">
                          <i className="orbit-center__icon fa fa-code"></i>
                        </li>
                        <li>
                          <ul className="ring-0">
                            <li><i className="orbit-icon fab fa-github"></i></li>
                            <li><i className="orbit-icon fab fa-node-js"></i></li>
                            <li><i className="orbit-icon fab fa-git-alt"></i></li>
                            <li><i className="orbit-icon fab fa-linkedin"></i></li>
                          </ul>
                        </li>
                        <li>
                          <ul className="ring-1">
                            <li><i className="orbit-icon native fab fa-react"></i></li>
                            <li><i className="orbit-icon fab fa-react"></i></li>
                            <li><i className="orbit-icon fab fa-vuejs"></i></li>
                          </ul>
                        </li>
                        <li>
                          <ul className="ring-2">
                            <li><i className="orbit-icon  fab fa-node-js"></i></li>
                            <li><i className="orbit-icon fab fa-npm"></i></li>
                            <li><i className="orbit-icon fab fa-php"></i></li>
                            <li><i className="orbit-icon fab fa-laravel"></i></li>
                            <li><i className="orbit-icon fab fa-python"></i></li>
                            <li><i className="orbit-icon fab fa-bootstrap"></i></li>
                            <li><i className="orbit-icon fab fa-sass"></i></li>
                            <li><i className="orbit-icon fab fa-wordpress"></i></li>
                          </ul>
                        </li>
                        <li>
                          <ul className="ring-3">
                            <li><i className="orbit-icon fab fa-html5"></i></li>
                            <li><i className="orbit-icon fab fa-css3-alt"></i></li>
                            <li><i className="orbit-icon fab fa-js"></i></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
        </>
    )
  }
}

export default withAuth0(AboutUs);