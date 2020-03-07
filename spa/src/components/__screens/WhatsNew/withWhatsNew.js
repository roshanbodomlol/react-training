import React, { Component } from 'react';

import { API } from '../../../constants';
import { get } from '../../../services/api.services';

const withWhatsNew = (WhatsNewComponent) => {
  class WithWhatsNew extends Component {
    state = {
      posts: [],
      loading: true
    };

    componentDidMount() {
      get(API.ENDPOINTS.POSTS_ALL)
        .then((responsePosts) => {
          const posts = responsePosts.map((p) => ({ img: p.fimg_url, title: p.title.rendered }));
          this.setState({ posts, loading: false });
        })
        .catch((e) => console.log(e));
    }

    render() {
      const {
        posts,
        loading
      } = this.state;

      return (
        <WhatsNewComponent
          posts={posts}
          loading={loading}
        />
      );
    }
  }

  return WithWhatsNew;
};

export default withWhatsNew;
