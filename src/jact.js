import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/about/About';
import { Plyers } from './components/plyers/plyers';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Admin } from './components/admin/admin';

export const Jact = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/players' component={Plyers} />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
    </Router>
  );
};
