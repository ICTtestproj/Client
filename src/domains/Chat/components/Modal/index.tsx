import * as React from "react";
import { ModalBox } from "./style";
import { TitleContainer } from "../../../../domains/Authentication/components/SignIn/Title/style"
import STitle from "../../../../packages/DesignSystem/Title"


const Modal = () => {
 
  return(
    <ModalBox>
      <TitleContainer>
        <STitle>등록하기</STitle>
      </TitleContainer>
    </ModalBox>
  );
};

export default Modal;
