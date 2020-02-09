import React, { Component } from 'react';

class Label extends Component {
  render() {
    const { title, value } = this.props;

    return (
      <div className="label">
        <p>{title}</p>
        <p>{value}</p>
      </div>
    );
  }
}

export default Label;
