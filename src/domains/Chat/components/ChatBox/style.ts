import styled from "styled-components";

export const ChatBoxContainer = styled.div`
  max-width: 220px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  background: gray;

  > div {
    max-width: 220px;
    min-width: 0px;
    display: inline-block;
    font-size: 14px;
    line-height: 1.79;
    text-align: left;
    min-height: 0px;
    padding: 16px 16px 15px 15px;
    border-radius: 15px;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background: rgba(255, 255, 255, 0.22);
  }

  pre {
    color: #ffffff;
  }
`;

export const ScrapBtn = styled.span<{ isHover: boolean }>`
  max-width: 220px;
  margin-top: 6px;
  margin-right: 10px;
  visibility: ${({ isHover }) => (isHover ? "visible" : "hidden")};
  cursor: pointer;

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
