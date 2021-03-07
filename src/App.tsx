import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import GlobalStyle from "./packages/styles/GlobalStyle";
import { Authentication } from "./pages";
import Main from "./pages/MyPage/Main";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </HashRouter>
  );
}

export default App;
