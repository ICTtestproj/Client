import styled from "styled-components";

export const KeywordsListContainer = styled.div`
  margin-top: 60px;
`;

export const KeywordList = styled.ul`
  width: 100%;
  height: 40px;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const KeywordItem = styled.li`
  height: 40px;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  font-weight: 300;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(255, 255, 255, 0.25);
`;
