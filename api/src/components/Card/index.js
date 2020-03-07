import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({ content, title, imageUrl }) => (
  <div className="card">
    {
      imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt=""/>
        </div>
      )
    }
    <div className="details">
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
  </div>
);

Card.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  imageUrl: PropTypes.string
};

Card.defaultProps = {
  title: null,
  imageUrl: null
};

export default Card;
