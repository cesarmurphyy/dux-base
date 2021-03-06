import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';

class GraphicDesign extends React.Component {
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
                  <h1>I reckon we put a cool graphic here</h1>
                  <span className="subheading">
                    with a bit of a blurb like fourth phase hahah
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-body">
          <Row>
            <Col md="10" lg="8" className="mx-auto">
              {
                <React.Fragment>
                  <div className="post-preview">
                    <Link route={`/blogs/blogId`}>
                      <a>
                        <h2 className="post-title">
                          Still to decide how we are going to separate this
                        </h2>
                        <h3 className="post-subtitle">
                          But for now we can just leave it full of random text
                        </h3>
                      </a>
                    </Link>
                    <p className="post-meta">woooooooooooooo</p>
                  </div>
                  <hr />
                  <div className="post-preview">
                    <Link route={`/blogs/blogId`}>
                      <a>
                        <h2 className="post-title">
                          I promise this only took like 3 minutes
                        </h2>
                        <h3 className="post-subtitle">
                          And didnt make this any later than it should have been
                        </h3>
                      </a>
                    </Link>
                    <p className="post-meta">
                      I am finiding this weirdly therapeautic though
                    </p>
                  </div>
                  <hr />
                  <div className="post-preview">
                    <Link route={`/blogs/blogId`}>
                      <a>
                        <h2 className="post-title">Okay last one</h2>
                        <h3 className="post-subtitle">Dont kill me</h3>
                      </a>
                    </Link>
                    <p className="post-meta">
                      Will change more shit and add in a footer etc, this is
                      just for you to play around with
                    </p>
                  </div>
                  <hr />
                </React.Fragment>
              }
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">
                  Read More - about whatever it is we do hahaha &rarr;
                </a>
              </div>
            </Col>
          </Row>

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
        </BasePage>
      </BaseLayout>
    );
  }
}

export default GraphicDesign;
