import React, { Component } from 'react';

class Contact extends Component {
  state = {
    content: ''
  };

  render() {
    const { content } = this.state;

    return (
      <div id="contact" className="screen __fullHeight">
        {content}
      </div>
    );
  }
}

export default Contact;
