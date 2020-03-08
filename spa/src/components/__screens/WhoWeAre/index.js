import React, { Component } from 'react';
import { generatePath } from 'react-router';

import { get } from '../../../services/api.services';
import { API } from '../../../constants';
import Loading from '../../Loading';
import './WhoWeAre.scss';

class WhoWeAre extends Component {
  state = {
    loading: true,
    content: ''
  };

  componentDidMount() {
    get(generatePath(API.ENDPOINTS.PAGE_BY_ID, { id: 547 }))
      .then((contentResponse) => {
        this.setState({
          loading: false,
          content: contentResponse.content.rendered
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { loading, content } = this.state;
    return (
      <div id="who-we-are" className="screen __fullHeight">
        {
          loading
            ? <Loading/>
            : (
              <div className="content">
                <div dangerouslySetInnerHTML={{ __html: content }}/>
              </div>
            )
        }
      </div>
    );
  }
}

export default WhoWeAre;
