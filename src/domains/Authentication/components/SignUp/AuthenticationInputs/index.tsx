import * as React from "react";

import { Input } from "../../../../../packages/DesignSystem";
import { InputsContainer } from "./style";

const AuthenticationInputs: React.FC = () => {
  return (
    <InputsContainer>
      <Input isAct={false}>
        <label htmlFor="">이메일 주소</label>
        <div>
          <input type="text" />
          <button>인증번호 전송</button>
        </div>
      </Input>
      <Input isAct={false}>
        <label htmlFor="">인증 번호</label>
        <div>
          <input type="text" />
          <button>인증 확인</button>
        </div>
      </Input>
    </InputsContainer>
  );
};

export default AuthenticationInputs;
