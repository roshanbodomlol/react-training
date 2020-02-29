import React from 'react';

import './Card.scss';

const Card = ({ content, title }) => (
  <div className="card">
    {
      title && (
        <div className="title">
          {title}
        </div>
      )
    }
    <div className="content">
      {content}
    </div>
  </div>
);

export default Card;
