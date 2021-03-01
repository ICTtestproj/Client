import styled from "styled-components";

export const Title = styled.h1`
  font-size: 28px;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const TitleEditInput = styled.input`
  border-bottom: 1px soild white;
  font-size: 28px;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const Content = styled.div`
  width: 390px;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 25px;
  box-sizing: border-box;

  > p {
    font-size: 15px;
    color: white;
    line-height: 2.3;
  }
`;
