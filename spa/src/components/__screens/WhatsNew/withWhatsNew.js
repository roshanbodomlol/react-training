import React, { Component } from 'react';

const withWhatsNew = (WhatsNewComponent) => {
  class WithWhatsNew extends Component {
    state = {};

    render() {
      return (
        <WhatsNewComponent/>
      );
    }
  }

  return WithWhatsNew;
};

export default withWhatsNew;
