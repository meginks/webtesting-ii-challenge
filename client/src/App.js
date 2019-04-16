import React, { Component } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor() {
    super();
  this.state = {
    ballCount: 0,
    strikeCount: 0, 
    hitCount: 0
  }
  }

  ball = () => { 
    const ballCount = this.state.ballCount;
    if (this.state.ballCount >= 4) {
      this.setState({
        ballCount: 0,
        strikeCount: 0
      })
    } else {
    this.setState({
      ballCount: ballCount+1
    })
  }
}

  strike = () => { 
    const strikeCount = this.state.strikeCount;
    if (this.state.strikeCount >= 3) {
      this.setState({
        ballCount: 0,
        strikeCount: 0
      })
    } else {
    this.setState({
        strikeCount: strikeCount+1
      })
  }
}

  foul = () => {
    const strikeCount = this.state.strikeCount;
    if (this.state.strikeCount <= 1) {
      this.setState({
        strikeCount: strikeCount+1
      })
    } 
  } 

  hit = () => {
    const hitCount = this.state.hitCount;
    this.setState({
      hitCount: hitCount+1
    })
  }

  render() {
    return (
      <div className="App">
       <Display ballCount={this.state.ballCount} hitCount={this.state.hitCount} strikeCount={this.state.strikeCount} />
       <Dashboard ball={this.ball} strike={this.strike} foul={this.foul} hit={this.hit} />
      </div>
    );
  }
}

export default App;
