import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import GlobalStyle from './packages/styles/GlobalStyle';
import {
  Authentication
} from './pages';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Authentication.SignIn} />
      </Switch>
    </HashRouter>
  );
}

export default App;
