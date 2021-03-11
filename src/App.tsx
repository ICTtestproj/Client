import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import GlobalStyle from "./packages/styles/GlobalStyle";
import { Authentication, Mypage, Chatting } from "./pages";
import Main from "./pages/MyPage/ScrapDetail";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path='/signin' component={Authentication.SignIn} />
        <Route exact path='/signup' component={Authentication.SignUp}/>
        <Route exact path='/' component={Chatting.Chat}/>
        <Route exact path='/mypage' component={Mypage.MypageMain} />
        <Route exact path='/mypage/scrap' component={Mypage.ScrapList} />
        {/* <Route exact path='/mypage/scrap' component={Mypage.ScrapDetail} /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
