import React, { Component } from 'react';

export default class HornedBeasts extends Component {
  render() {
    return (
      <div>
        {console.log(this)}
        <h2>{this.props.title}</h2>
        <img
          src={this.props.src}
          alt={this.props.title}
          title={this.props.title}
          className="image-beast"
        />
        <p>{this.props.description}</p>
      </div>
    );
  }
}
