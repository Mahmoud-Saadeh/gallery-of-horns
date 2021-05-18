import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
export default class Main extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            {this.props.Beasts.map((beast) => {
              return (
                <Col lg={4} md="auto" key={beast.title}>
                  <HornedBeasts
                    title={beast.title}
                    src={beast.image_url}
                    description={beast.description}
                    showHandler={this.props.showHandler}
                    getDataHandler={this.props.getDataHandler}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
