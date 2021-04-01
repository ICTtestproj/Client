import * as React from "react";

interface State {
    isModalOpened: boolean;
    setIsModalOpened: (isModalOpened: boolean) => void,
    title: string;
    setTitle: (title: string) => void,
    content: string;
    setContent: (content: string) => void,
    isAccepted: boolean;
    setIsAccepted: (isAccepted: boolean) => void,
}

const initialState: State = {
    isModalOpened: false,
    setIsModalOpened: () => false,
    title: '',
    setTitle: () => '',
    content: '',
    setContent: () => '',
    isAccepted: false,
    setIsAccepted: () => false
};

export const ModalContext = React.createContext<State>(initialState);

const ModalContextProvider: React.FC = ({ children }) => {
    const [isModalOpened,setIsModalOpened] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');
    const [isAccepted, setIsAccepted] = React.useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpened,
        setIsModalOpened,
        title,
        setTitle,
        content,
        setContent,
        isAccepted,
        setIsAccepted
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
