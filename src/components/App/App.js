import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import UserForm from '../UserForm';
import PrivacyForm from '../PrivacyForm';
import Confirmation from '../Confirmation';
import Header from '../Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/details" />
        </Route>
        <Route exact path="/details">
          <UserForm />
        </Route>
        <Route path="/privacy">
          <PrivacyForm />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
