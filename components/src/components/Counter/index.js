import React, { Component } from 'react';

import Label from '../Label';
import './Counter.scss';

class Counter extends Component {
  state = {
    value: 0
  };

  clicker = () => {
    const { value } = this.state;

    this.setState({
      value: value + 1
    });
  }

  render() {
    const { value } = this.state;

    return (
      <div id="counter">
        <button onClick={this.clicker}>Click Me</button>
        <Label title="The counter is set at" value={value}/>
      </div>
    );
  }
}

export default Counter;
