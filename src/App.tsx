import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import GlobalContextProvider from "./packages/contexts/GlobalContext";
import MypageContextProvider from "./packages/contexts/MypageContext";
import GlobalStyle from "./packages/styles/GlobalStyle";
import { Authentication, Mypage, Chatting } from "./pages";

import Modal from './domains/Common/components/Modal';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <GlobalContextProvider>
          <Route exact path="/signin" component={Chatting.Chat} />
          <Route exact path="/signup" component={Authentication.SignUp} />
          <Route exact path="/" component={Chatting.Chat} />
          {/* <Route exact path="/" component={Modal} /> */}
          <MypageContextProvider>
            <Route exact path="/mypage" component={Mypage.MypageMain} />
            <Route exact path="/mypage/scrap" component={Mypage.ScrapList} />
            <Route path='/mypage/scrap/:id' component={Mypage.ScrapDetail} />
          </MypageContextProvider>
          <Authentication.CheckToken />
        </GlobalContextProvider>
      </Switch>
    </HashRouter>
  );
}

export default App;
