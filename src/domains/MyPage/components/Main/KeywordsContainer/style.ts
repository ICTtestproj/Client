import styled from "styled-components";

export const KeywordsListContainer = styled.div`
  margin-top: 35px;
`;

export const KeywordList = styled.ul`
  width: 100%;
  height: 45px;
  overflow-x: auto;
  white-space:nowrap;
  overflow-y: hidden;
  padding-bottom: 5px;

  &::-webkit-scrollbar{
    height: 5px;
  }

  &::-webkit-scrollbar-thumb{
    background: rgba(255,255,255, 0.1);
  }
`;

export const KeywordItem = styled.li`
  width: 200px;
  height: 40px;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  font-weight: 300;
  padding: 10px 15px;
  display: inline-block;
  align-items: center;
  margin-right: 20px;
  border-radius: 15px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(255, 255, 255, 0.25);
  box-sizing: border-box;
`;

export const Notification = styled.li`
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  margin-top: 15px;
`;