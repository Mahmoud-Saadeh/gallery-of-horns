import React, { Component } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';

export default class SelectBeast extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.showHide} onHide={this.props.closeHandler}>
          <Modal.Header>
            <Modal.Title>{this.props.tilte}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img variant="top" src={this.props.src} />
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>
              ❤️ {this.props.votes} {this.props.votes > 1 ? 'Votes' : 'Vote'}
            </Card.Text>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
