import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
export default class HornedBeasts extends Component {
  constructor(props){
    super(props);
    this.state={votes: 0,};
  }

  voteStateHandler = ()=>{
    this.setState({
      votes: this.state.votes + 1
    })
    console.log(this.state.votes);
  }
  render() {
    return (
      <div>
        {/* <h2>{this.props.title}</h2>
        <img
          src={this.props.src}
          alt={this.props.title}
          title={this.props.title}
          className="image-beast"
        />
        <p>{this.props.description}</p>
        <p>❤️ {this.state.votes} {this.state.votes > 1 ? 'Votes' : 'Vote'}</p>
        <button onClick={this.voteStateHandler}>Vote</button> */}
        <Card style={{ width: '18rem', margin:'0px 0px 30px 0px' }}>
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              ❤️ {this.state.votes} {this.state.votes > 1 ? 'Votes' : 'Vote'}
            </Card.Text>
            <Button onClick={this.voteStateHandler} variant="primary">Vote</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
