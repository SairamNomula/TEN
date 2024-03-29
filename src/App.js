import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/login'

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
