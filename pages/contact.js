import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';

class Contact extends React.Component {
  render() {
    return (
      <BaseLayout headerType={'landing'} className="blog-listing-page">
        <div
          className="masthead"
          style={{ backgroundImage: "url('/static/images/home-bg.jpg')" }}
        >
          <div className="overlay" />
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>I'm going to work on getting a form going here</h1>
                  <span className="subheading">
                    you work your css magic elsewhere for now hahaha
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <footer>
          <Container>
            <Row>
              <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-github fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </li>
                </ul>
                <p className="copyright text-muted">
                  Copyright &copy; Dux Development 2019
                </p>
              </div>
            </Row>
          </Container>
        </footer>
      </BaseLayout>
    );
  }
}

export default Contact;
