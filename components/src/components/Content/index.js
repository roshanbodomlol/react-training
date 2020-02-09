import React from 'react';

const Content = ({ children }) => (
  <div id="content-wrapper">
    <div className="container">
      <div className="row">
        <div className="col">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Content;
