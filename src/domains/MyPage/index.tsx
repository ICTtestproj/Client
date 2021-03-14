import React, { createContext, useContext } from "react";

import { GlobalContext } from "../../packages/contexts/GlobalContext";

export const MyPageContext = createContext<{ username: string }>({
  username: ""
});

const MyPage = () => {
  const { username } = useContext(MyPageContext);
  const { accessToken, handleAccessToken } = useContext(GlobalContext);

  return (
    <MyPageContext.Provider value={{ username: "" }}></MyPageContext.Provider>
  );
};

export default MyPage;
