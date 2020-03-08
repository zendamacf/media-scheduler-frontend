import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from 'components/Menu';
import Home from 'components/Home';
import Login from 'components/Login';
import Logout from 'components/Logout';
import PageNotFound from 'components/PageNotFound';
import EpisodeDateList from 'components/episodes/EpisodeDateList';
import 'react-bulma-components/dist/react-bulma-components.min.css';

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
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
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
