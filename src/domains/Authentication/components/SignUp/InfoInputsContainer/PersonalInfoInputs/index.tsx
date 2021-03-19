import * as React from "react";

import {PersonalInputs} from '../../../../models';

import { Input } from "../../../../../../packages/DesignSystem";
import { InputsContainer } from "./style";

const AuthenticationInputs: React.FC<PersonalInputs> = ({
  name,
  setName,
  employNum,
  setEmployNum
}) => {
  const handleChangeName = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);
  const handleChangeEmployNum = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployNum(e.target.value);
  }, []);

  return (
    <InputsContainer>
      <Input isAct={false}>
        <label htmlFor="">이름</label>
        <div>
          <input type="text" value={name} onChange={handleChangeName} />
        </div>
      </Input>
      <Input isAct={false}>
        <label htmlFor="">행번</label>
        <div>
          <input type="text" value={employNum} onChange={handleChangeEmployNum} />
        </div>
      </Input>
    </InputsContainer>
  );
};

export default AuthenticationInputs;
