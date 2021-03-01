import styled from "styled-components";

export const SButton = styled.button`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  color: white;

  &.btn_completion {
    width: 300px;
    height: 60px;
    border-radius: 15px;
    background-image: linear-gradient(85deg, #717df7 10%, #a73de6 88%);
  }
  &.btn_move-page {
    width: 75px;
    height: 32px;
    opacity: 0.22;
    border-radius: 10px;
    background-color: #ffffff;
  }
  &.btn_setting {
    width: 50px;
    height: 20px;
    opacity: 0.22;
    border-radius: 8px;
    background-color: #ffffff;
  }
`;
