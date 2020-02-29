import React, { Component } from 'react';
import axios from 'axios';

import Card from '../Card';

class Joke extends Component {
  state = {
    joke: '',
    loading: true
  };

  componentDidMount() {
    axios
      .get('https://sv443.net/jokeapi/category/programming')
      .then((response) => {
        this.setState({
          joke: response.data.joke || `${response.data.setup} ${response.data.delivery}`,
          loading: false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { joke, loading } = this.state;

    return (
      <div id="content-wrapper">
        {
          loading
            ? (
              <p>Loading</p>
            )
            : (
              <div className="joke-wrap">
                <Card content={joke}/>
              </div>
            )
        }
      </div>
    );
  }
}

export default Joke;
