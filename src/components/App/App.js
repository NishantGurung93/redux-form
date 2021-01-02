import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserForm from '../UserForm';
import PrivacyForm from '../PrivacyForm';
import Confirmation from '../Confirmation';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
