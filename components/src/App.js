import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Counter from './components/Counter';

function App() {
  return (
    <div id="wrapper">
      <Header/>
      <Content>
        <Counter/>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
