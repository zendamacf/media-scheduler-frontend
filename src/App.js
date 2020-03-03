import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import EpisodeDateList from './components/episodes/EpisodeDateList';
import 'react-bulma-components/dist/react-bulma-components.min.css';

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            path='/login'
            component={Login}
          />
          <Route
            path='/logout'
            component={Logout}
          />
          <Route
            path='/episodes'
            component={EpisodeDateList}
          />
        </div>
      </Router>
    );
  }
}

export default App;
