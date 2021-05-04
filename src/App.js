import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login/login';
import Register from './Components/Register/register';
import Home from './Components/HomePage/home';
import BokkingPage from './Components/BookingFolder/BokkingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/banner" component={BokkingPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
