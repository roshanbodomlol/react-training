import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import Joke from './components/Joke';
import './styles/global.scss';

function App() {
  return (
    <div id="wrapper">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/posts" exact component={Posts}/>
        <Route path="/joke" exact component={Joke}/>
      </Switch>
    </div>
  );
}

export default App;
