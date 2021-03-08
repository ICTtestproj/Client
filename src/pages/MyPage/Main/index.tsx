import * as React from "react";

import {
  BtnToChat,
  FAQContainer,
  KeywordsContainer,
  MyInfo,
  ScrapContainer
} from "../../../domains/MyPage/components/Main";

const Main: React.FC = () => {
  return (
    <div className="colorful">
      <BtnToChat />
      <MyInfo />
      <KeywordsContainer />
      <FAQContainer></FAQContainer>
      <ScrapContainer></ScrapContainer>
    </div>
  );
};

export default Main;
