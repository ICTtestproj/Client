import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import GlobalContextProvider from "./packages/contexts/GlobalContext";
import GlobalStyle from "./packages/styles/GlobalStyle";
import { Authentication, Mypage, Chatting } from "./pages";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <GlobalContextProvider>
          <Route exact path="/signin" component={Chatting.Chat} />
          {/* <Route exact path="/signup" component={Authentication.SignUp} /> */}
          <Route exact path="/" component={Chatting.Chat} />
          {/* <Route exact path="/mypage" component={Mypage.MypageMain} /> */}
          {/* <Route exact path="/mypage/scrap" component={Mypage.ScrapList} /> */}
          {/* <Route exact path='/mypage/scrap' component={Mypage.ScrapDetail} /> */}
        </GlobalContextProvider>
      </Switch>
    </HashRouter>
  );
}

export default App;
