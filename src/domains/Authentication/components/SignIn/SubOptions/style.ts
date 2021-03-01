import styled from "styled-components";

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  > p {
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #707070;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;

    &:last-child {
      margin-top: 30px;
    }
  }
`;
