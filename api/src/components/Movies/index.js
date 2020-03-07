import React, { Component } from 'react';
import { Row, Col, AutoComplete } from 'antd';
import axios from 'axios';

import { TMDB, TMDB_IMAGE_BASE } from '../../constants/api.constants';
import Card from '../Card';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      movie: null
    };
  }

  handleSearch = (query) => {
    axios
      .get(`${TMDB}&query=${query}`)
      .then((response) => {
        const results = response.data.results;
        this.setState({
          results
        });
      })
      .catch(e => console.error(e));
  };

  handleClick = (title) => {
    const { results } = this.state;
    const movie = results.find(result => result.title === title);
    this.setState({ movie });
  };

  render() {
    const { results, movie } = this.state;
    const options = results.map((result) => (
      {
        value: result.title
      }
    ));
    return (
      <div className="container">
        <Row type="flex" justify="center">
          <Col span={12}>
            <AutoComplete
              options={options}
              style={{ width: 200 }}
              onSelect={this.handleClick}
              onChange={(val) => this.handleSearch(val)}
              placeholder="Search a movie"
            />
          </Col>
        </Row>
        {
          movie && (
            <div className="movie-detail">
              <Row>
                <Col>
                  <Card
                    title={movie.title}
                    content={movie.overview}
                    imageUrl={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                  />
                </Col>
              </Row>
            </div>
          )
        }
      </div>
    );
  }
}

export default Movies;
