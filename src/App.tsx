import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import {
  Main
} from './pages';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </HashRouter>
  );
}

export default App;
