import React from 'react';
import Slider from 'react-slick';
import { bool, arrayOf, objectOf, any } from 'prop-types';

import withWhatsNew from './withWhatsNew';
import './WhatsNew.scss';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const WhatsNew = ({ posts, loading }) => {
  const sliderList = posts.map((post, index) => (
    <div
      key={`slider-item-${index}`}
      className="slide"
    >
      <div
        className="slide-image"
        style={{ backgroundImage: `url('${post.img}')` }}
      />
      <span className="slide-title">{post.title}</span>
    </div>
  ));
  return (
    <div id="whats-new" className="screen">
      <Slider {...settings}>
        {sliderList}
      </Slider>
    </div>
  );
};

WhatsNew.propTypes = {
  posts: arrayOf(objectOf(any)).isRequired,
  loading: bool.isRequired
};

export default withWhatsNew(WhatsNew);
