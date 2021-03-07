import * as React from "react";

import { MyInfoContainer, SubText, Name } from "./style";

const MyInfo: React.FC = () => {
  return (
    <MyInfoContainer>
      <SubText>신한은행의 미래를 함께하는</SubText>
      <Name>김한주 님</Name>
    </MyInfoContainer>
  );
};

export default MyInfo;
