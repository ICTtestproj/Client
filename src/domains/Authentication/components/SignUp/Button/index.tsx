import * as React from "react";

import { Button as SButton } from "../../../../../packages/DesignSystem";
import { ButtonContainer } from "./style";

const Button: React.FC = () => {
  return (
    <ButtonContainer>
      <SButton className="btn_completion">회원가입</SButton>
    </ButtonContainer>
  );
};

export default Button;
