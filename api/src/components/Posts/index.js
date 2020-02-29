import React, { Component } from 'react';
import axios from 'axios';

import Card from '../Card';

class Posts extends Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          posts: response.data,
          loading: false
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { posts, loading } = this.state;
    const postList = posts.map((post) => (
      <Card
        key={post.id}
        title={post.title}
        content={post.body}
      />
    ));

    return (
      <div id="content-wrapper">
        <div className="post-list">
          <h1>POSTS</h1>
          {
            loading
              ? <p>Loading</p>
              : (
                <div className="card-list">
                  {postList}
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

export default Posts;
