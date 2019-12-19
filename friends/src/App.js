import React from 'react';
import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import Friends from './components/Friends';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <Link to="/friends">Friends</Link>
      <Link to="/">Login</Link>
    <div className="App">
      <Route path='/' component={Login} exact/>
      <PrivateRoute path='/friends' component={Friends} />
    </div>
    </Router>
  );
}

export default App;
