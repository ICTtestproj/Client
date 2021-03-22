import styled from "styled-components";

export const ChatBoxContainer = styled.div`
  max-width: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: transparent;
  // margin-left: 10px;
  word-break: break-all;
  margin-top: 20px;
  background-repeat: no-repeat;

  /* background-attachment: fixed; */

  > div {
    max-width: 220px;
    // min-width: 100px;
    display: inline-block;
    font-size: 14px;
    line-height: 1.79;
    // align-self:flex-start;
    text-align: left;
    min-height: 0px;
    padding: 16px 16px 15px 15px;
    // margin: 5px 5px 5px 5px;
    // margin-left: 10px;
    border-radius: 15px;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background: rgba(255, 255, 255, 0.22);
    &:last-child {
    margin-bottom: 80px;
  }
  }

  pre {
    color: #ffffff;
    white-space: normal;
  }

  .inbox {
    width: 60%;
    margin: 10px 20% 0 20%;
    // padding: 0 15px 0 15px;
    opacity: 0.3;
    border-radius: 5px;
    background-color: #f5f5f5;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    // color: #ffffff;
    // line-height: 2.08;
    letter-spacing: normal;
  }
`;

export const ScrapBtn = styled.span<{ isHover: boolean }>`
  max-width: none;
  margin-top: 6px;
  margin-right: 10px;
  visibility: ${({ isHover }) => (isHover ? "visible" : "hidden")};
  cursor: pointer;
  /* align-self: flex-end; */

  > p {
    display: inline-block;
    font-size: 10px;
    color: white;
    margin-right: 3px;
  }
  > img {
    width: 12px;
    height: 12px;
    display: inline-block;
  }
`;
