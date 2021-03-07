import * as React from "react";

import {
  FAQContainer,
  KeywordsContainer,
  MyInfo,
  ScrapContainer
} from "../../../domains/MyPage/components/Main";

const Main: React.FC = () => {
  return (
    <div className="colorful">
      <MyInfo></MyInfo>
      <KeywordsContainer></KeywordsContainer>
      <FAQContainer></FAQContainer>
      <ScrapContainer></ScrapContainer>
    </div>
  );
};

export default Main;
