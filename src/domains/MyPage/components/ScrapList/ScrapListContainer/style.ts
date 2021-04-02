import styled from "styled-components";

export const ListContainer = styled.ul`
  width: 100%;
  height: 550px;
  overflow-y: auto;
  margin-top: 50px;
  padding-right: 5px;
  box-sizing: border-box;

  &::-webkit-scrollbar{
    width: 5px;
  }

  &::-webkit-scrollbar-thumb{
    background: rgba(255,255,255, 0.1);
  } 

  > p {
    color :white;
    font-weight: 300;
    text-align: center;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  > p {
    color: white;
    font-weight: 300;
    font-size: 18px;
  }

  > img {
    width: 12px;
    height: 12px;
    cursor: pointer;
  }
`;
