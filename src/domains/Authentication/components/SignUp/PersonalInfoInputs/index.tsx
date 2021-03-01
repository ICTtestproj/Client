import * as React from "react";

import { Input } from "../../../../../packages/DesignSystem";
import { InputsContainer } from "./style";

const AuthenticationInputs: React.FC = () => {
  return (
    <InputsContainer>
      <Input isAct={false}>
        <label htmlFor="">이름</label>
        <div>
          <input type="text" />
        </div>
      </Input>
      <Input isAct={false}>
        <label htmlFor="">행번</label>
        <div>
          <input type="text" />
        </div>
      </Input>
    </InputsContainer>
  );
};

export default AuthenticationInputs;
