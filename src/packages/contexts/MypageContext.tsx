import * as React from "react";

interface ScrapListItem {
    question: string; 
    answer: string;
}

interface State {
    scrapList: ScrapListItem[];
    setScrapList: (scrapList: ScrapListItem[]) => void;
}

const initialState: State = {
  scrapList: [],
  setScrapList: () => {}
};

export const MypageContext = React.createContext<State>(initialState);

const MypageContextProvider: React.FC = ({ children }) => {
  const [scrapList, setScrapList] = React.useState<ScrapListItem[]>([]);

  return (
    <MypageContext.Provider
      value={{
          scrapList,
          setScrapList,
      }}
    >
      {children}
    </MypageContext.Provider>
  );
};

export default MypageContextProvider;
