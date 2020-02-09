import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Todo from './components/Todo';

function App() {
  return (
    <div id="wrapper">
      <Header/>
      <Content>
        <Todo/>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
