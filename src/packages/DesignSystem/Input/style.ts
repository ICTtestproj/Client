import styled from "styled-components";

export const SInput = styled.div<{ isAct: boolean }>`
  background: none;

  > label {
    font-size: 12px;
    color: #888888;
    display: block;
    margin-bottom: 9px;
  }
  > div {
    width: 300px;
    display: flex;
    > input {
      width: 100%;
      font-weight: 300;
      color: #000000;
      font-size: 14px;
      display: inline-block;
      /* ${({ isAct }) =>
        isAct
          ? "border-image: linear-gradient(225deg, #8f34c5, #616bd3); border-image-width: 0 0 0 1px;"
          : "border-bottom: 1px solid #b2b2b2;"} */
      padding: 0 2px 6px 2px;
      border-bottom: 1px solid #b2b2b2;
    }
    > button {
      width: 70px;
      height: 23px;
      display: inline-block;
      background-color: #b2b2b2;
      font-size: 8.5px;
      color: white;
      margin-left: 10px;
    }
  }
  > p {
    font-size: 12px;
    color: #717df7;
    margin-top: 6px;
  }
`;
