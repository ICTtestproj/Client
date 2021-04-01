import * as React from "react";

interface ScrapListItem {
    question: string; 
    answer: string;
    id: string;
}

interface State {
    scrapList: ScrapListItem[];
    setScrapList: (scrapList: ScrapListItem[]) => void;
    isScrapListEditMode: boolean;
    setIsScrapListEditMode: (isScrapListEditMode: boolean) => void;
    isScrapEditMode: boolean;
    setIsScrapEditMode: (isScrapEditMode: boolean) => void;
    newScrapTitle: string;
    setNewScrapTitle: (newScrapTitle: string) => void;
    newScrapContent: string;
    setNewScrapContent: (newScrapContent: string) => void;
}

const initialState: State = {
  scrapList: [],
  setScrapList: () => {},
  isScrapListEditMode: false,
  setIsScrapListEditMode: () => {},
  isScrapEditMode: false,
  setIsScrapEditMode: () => {},
  newScrapTitle: '',
  setNewScrapTitle: () => {},
  newScrapContent: '',
  setNewScrapContent: () => {}
};

export const MypageContext = React.createContext<State>(initialState);

const MypageContextProvider: React.FC = ({ children }) => {
  const [scrapList, setScrapList] = React.useState<ScrapListItem[]>([]);
  const [isScrapListEditMode, setIsScrapListEditMode] = React.useState<boolean>(false);
  const [isScrapEditMode, setIsScrapEditMode] = React.useState<boolean>(false);
  const [newScrapTitle, setNewScrapTitle] = React.useState<string>('');
  const [newScrapContent, setNewScrapContent] = React.useState<string>('');

  return (
    <MypageContext.Provider
      value={{
          scrapList,
          setScrapList,
          isScrapListEditMode,
          setIsScrapListEditMode,
          isScrapEditMode,
          setIsScrapEditMode,
          newScrapTitle,
          setNewScrapTitle,
          newScrapContent,
          setNewScrapContent
      }}
    >
      {children}
    </MypageContext.Provider>
  );
};

export default MypageContextProvider;
