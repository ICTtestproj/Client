import * as React from "react";

import { SignUpButtonProps } from "../../../../models/props";
import { signUp } from "../../../../remotes/SignUpAPI";

import { Button as SButton } from "../../../../../../packages/DesignSystem";
import { ButtonContainer } from "./style";

const Button: React.FC<SignUpButtonProps> = ({
  isNotEmpty,
  name,
  email,
  employNum,
  password,
  isCodeChecked,
  isPasswordChecked
}) => {
  const handleClickSignupBtn = React.useCallback(async () => {
    if (isNotEmpty && isCodeChecked && isPasswordChecked) {
      const response = await signUp({
        name,
        email,
        personalcode: employNum,
        password
      });

      if (response.result) {
        //모달
        window.location.hash = "#/signin";
      }
    } else {
      //모달
    }
  }, [
    isNotEmpty,
    name,
    email,
    employNum,
    password,
    isCodeChecked,
    isPasswordChecked
  ]);

  return (
    <ButtonContainer>
      <SButton className="btn_completion" onClick={handleClickSignupBtn}>
        회원가입
      </SButton>
    </ButtonContainer>
  );
};

export default Button;
