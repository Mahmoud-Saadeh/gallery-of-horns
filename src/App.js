import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SelectBeast from './components/SelectBeast';
import Beasts from './components/BeastsData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Beasts: Beasts,
      showHide: false,
      src: '',
      title: '',
      description: '',
      votes: 0,
    };
  }

  incVotesHandler = (votes, beastName) => {
    let arr = this.state.Beasts.map((elem) =>
      elem.title === beastName ? { ...elem, votes: votes } : elem
    );
    this.setState({ Beasts: arr });
  };

  getDataHandler = (src, title, description, votes) => {
    this.setState({
      src,
      title,
      description,
      votes,
    });
  };
  showModalHandler = () => {
    this.setState({
      showHide: true,
    });
  };
  hideModalHandler = () => {
    this.setState({
      showHide: false,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Main
          Beasts={this.state.Beasts}
          showHandler={this.showModalHandler}
          getDataHandler={this.getDataHandler}
          incVotesHandler={this.incVotesHandler}
        />
        <SelectBeast
          closeHandler={this.hideModalHandler}
          showHide={this.state.showHide}
          src={this.state.src}
          title={this.state.title}
          description={this.state.description}
          votes={this.state.votes}
        />
        <Footer />
      </div>
    );
  }
}
