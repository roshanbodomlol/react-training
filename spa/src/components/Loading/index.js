import React from 'react';
import { Spin } from 'antd';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '500px'
};

const Loading = () => (
  <div className="loading" style={styles}>
    <Spin/>
  </div>
);

export default Loading;
