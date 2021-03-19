import * as React from "react";

import { OptionsContainer } from "./style";

const SubOptions: React.FC = () => {
  const handleClickSignup = React.useCallback(() => {
    window.location.hash = '/signup';
  }, []);

  return (
    <OptionsContainer>
      <p onClick={handleClickSignup}>회원가입</p>
      <p>비밀번호 찾기</p>
    </OptionsContainer>
  );
};

export default SubOptions;
