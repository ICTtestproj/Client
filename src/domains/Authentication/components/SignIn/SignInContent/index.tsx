import * as React from "react";

import { Input, Button } from "../../../../../packages/DesignSystem";
import { SignInContentContainer } from "./style";

const SignInContent: React.FC = () => {
  return (
    <SignInContentContainer>
      <Input isAct={false}>
        <label htmlFor="">이메일</label>
        <div>
          <input type="text" />
        </div>
      </Input>
      <Input isAct={false}>
        <label htmlFor="">비밀번호</label>
        <div>
          <input type="text" />
        </div>
      </Input>

      <Button className="btn_completion">로그인</Button>
    </SignInContentContainer>
  );
};

export default SignInContent;
