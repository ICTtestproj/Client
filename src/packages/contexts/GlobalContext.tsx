import * as React from "react";

interface State {
  accessToken: string;
  handleAccessToken: (accessToken: string) => void;
}

const initialState: State = {
  accessToken: "",
  handleAccessToken: () => {}
};

export const GlobalContext = React.createContext<State>(initialState);

const GlobalContextProvider: React.FC = ({ children }) => {
  const [access_token, setAccess_token] = React.useState<string>("");

  const handleAccessToken = React.useCallback(newAccessToken => {
    setAccess_token(newAccessToken);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        accessToken: access_token,
        handleAccessToken
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
