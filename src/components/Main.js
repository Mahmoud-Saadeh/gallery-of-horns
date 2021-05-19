import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import { Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { filteredBeasts: this.props.Beasts };
  }

  filterHandler = (event) => {
    const filteredData = this.props.Beasts.filter((beast) =>
      event.target.value === 'all'
        ? true
        : Number(beast.horns) === Number(event.target.value)
    );
    this.setState({
      filteredBeasts: filteredData,
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Filter by number of horns.</Form.Label>
                <Form.Control as="select" onChange={this.filterHandler}>
                  <option value={'all'}>select all</option>
                  <option value={1}>1 horn</option>
                  <option value={2}>2 horns</option>
                  <option value={3}>3 horns</option>
                  <option value={100}>100 horns</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Row>
          <Row className="justify-content-center">
            {this.state.filteredBeasts.map((beast) => {
              return (
                <Col lg={4} md="auto" key={beast.title}>
                  <HornedBeasts
                    title={beast.title}
                    votes={beast.votes}
                    src={beast.image_url}
                    description={beast.description}
                    showHandler={this.props.showHandler}
                    getDataHandler={this.props.getDataHandler}
                    incVotesHandler={this.props.incVotesHandler}
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
