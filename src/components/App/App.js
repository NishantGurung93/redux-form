import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import UserForm from '../UserForm';
import PrivacyForm from '../PrivacyForm';
import Confirmation from '../Confirmation';
import Header from '../Header/Header';
import './app.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Redirect to="/details" />
          </Route>
          <Route path="/details">
            <UserForm />
          </Route>
          <Route path="/privacy">
            <PrivacyForm />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
