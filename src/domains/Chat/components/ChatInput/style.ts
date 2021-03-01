import styled from "styled-components";

export const ChatInputContainer = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  padding: 0 25px;
  align-items: center;
  position: absolute;
  bottom: 0;

  > input {
    width: 100%;
    font-size: 14px;
    color: #848484;
    display: block;
    margin-right: 10px;
  }

  > img {
    width: 26px;
    height: 26px;
    /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); */
  }
`;
