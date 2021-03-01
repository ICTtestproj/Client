import * as React from "react";

import { Input } from "../../../../../packages/DesignSystem";
import { InputsContainer } from "./style";

const PasswordInputs: React.FC = () => {
  return (
    <InputsContainer>
      <Input isAct={false}>
        <label htmlFor="">비밀번호</label>
        <div>
          <input type="password" />
        </div>
      </Input>
      <Input isAct={false}>
        <label htmlFor="">비밀번호 확인</label>
        <div>
          <input type="password" />
        </div>
      </Input>
    </InputsContainer>
  );
};

export default PasswordInputs;
