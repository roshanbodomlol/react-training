import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import Joke from './components/Joke';
import Movies from './components/Movies';
import './styles/global.scss';

const App = () => (
  <div id="wrapper">
    <Header/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/posts" exact component={Posts}/>
      <Route path="/joke" exact component={Joke}/>
      <Route path="/movies" exact component={Movies}/>
    </Switch>
  </div>
);

export default App;
