import * as React from "react";

import { PasswordInputsProps } from "../../../../models/props";

import { Input } from "../../../../../../packages/DesignSystem";
import { InputsContainer } from "./style";

const PasswordInputs: React.FC<PasswordInputsProps> = ({
  password,
  setPassword,
  rePassword,
  setRePassword,
  isPasswordChecked,
  setIsPasswordChecked
}) => {
  const handleChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  const handleChangeRePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRePassword(e.target.value);

      if (password !== rePassword) {
        setIsPasswordChecked(false);
      } else {
        setIsPasswordChecked(true);
      }
    },
    []
  );

  return (
    <InputsContainer>
      <Input isAct={false}>
        <label htmlFor="">비밀번호</label>
        <div>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
      </Input>
      <Input isAct={false}>
        <label htmlFor="">비밀번호 확인</label>
        <div>
          <input
            type="password"
            value={rePassword}
            onChange={handleChangeRePassword}
          />
        </div>
        <p>
          {isPasswordChecked
            ? "비밀번호가 일치합니다."
            : "비밀번호가 일치하지 않습니다."}
        </p>
      </Input>
    </InputsContainer>
  );
};

export default PasswordInputs;
