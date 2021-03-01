import styled from "styled-components";

export const Title = styled.h1`
  font-size: 28px;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const ListItem = styled.li`
  width: 370px;
  height: 50px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  > p {
    color: white;
    font-weight: 300;
    font-size: 18px;
  }

  > img {
    width: 12px;
    height: 12px;
  }
`;
