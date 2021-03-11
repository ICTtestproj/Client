import * as React from "react";

import { Input, Button } from "../../../../../packages/DesignSystem";
import { SignInContentContainer } from "./style";

const SignInContent: React.FC = () => {

  const handleFocusInInput = React.useCallback((id: string) => {

  }, []);

  const handleFocusOutInput = React.useCallback((id: string) => {

  }, []);

  const handleClickLoginButton = React.useCallback(() => {
    window.location.hash = '#/mypage';
  }, []);

  return (
    <SignInContentContainer>
      <Input isAct={false}>
        <label htmlFor="">이메일</label>
        <div>
          <input type="text" id="input_email" />
        </div>
      </Input>
      <Input isAct={false}>
        <label htmlFor="input_password">비밀번호</label>
        <div>
          <input type="text" id="input_password" />
        </div>
      </Input>

      <Button className="btn_completion" onClick={handleClickLoginButton}>로그인</Button>
    </SignInContentContainer>
  );
};

export default SignInContent;
