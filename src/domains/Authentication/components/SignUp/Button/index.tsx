import * as React from "react";

import { Button as SButton } from "../../../../../packages/DesignSystem";
import { ButtonContainer } from "./style";

const Button: React.FC = () => {
  const handleClickSignupBtn = React.useCallback(
    () => {
      window.location.hash = '#/chat'
    },
    [],
  )

  return (
    <ButtonContainer>
      <SButton className="btn_completion">회원가입</SButton>
    </ButtonContainer>
  );
};

export default Button;
