import React from "react";

import { GlobalContext } from "packages/contexts/GlobalContext";

export const MyPageContext = React.createContext<{ username: string }>({
  username: ""
});

const MyPage = () => {
  const { username } = React.useContext(MyPageContext);
  const { accessToken, setAccessToken } = React.useContext(GlobalContext);

  return (
    <MyPageContext.Provider value={{ username: "" }}></MyPageContext.Provider>
  );
};

export default MyPage;
