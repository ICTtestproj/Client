import React, { createContext, useContext } from "react";

export const MyPageContext = createContext<{ username: string }>({
  username: "",
});

const MyPage = () => {
  const { username } = useContext(MyPageContext);

  return (
    <MyPageContext.Provider value={{ username: "" }}></MyPageContext.Provider>
  );
};

export default MyPage;
