import * as React from "react";

interface State {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
}

const initialState: State = {
  accessToken: "",
  setAccessToken: () => {}
};

export const GlobalContext = React.createContext<State>(initialState);

const GlobalContextProvider: React.FC = ({ children }) => {
  const [access_token, setAccess_token] = React.useState<string>("");

  const setAccessToken = React.useCallback(newAccessToken => {
    setAccess_token(newAccessToken);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        accessToken: access_token,
        setAccessToken
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
