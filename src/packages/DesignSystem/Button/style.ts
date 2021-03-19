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
    border-radius: 10px;
    background-color: rgba(255,255,255,0.22);
    font-weight: 300;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    >img {
      width: 12px;
      height: 12px;

      &.next{
        margin-left: 2px;
      }
      &.prev{
        margin-right: 2px;
      }
    }
  }
  &.btn_setting {
    width: 50px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.22);
    border-radius: 8px;
    color: white;
    font-size: 10px;
  }
`;
