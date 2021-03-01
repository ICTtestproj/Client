import styled from "styled-components";

export const STitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 40px;
    color: #595959;
    text-align: center;
    font-weight: 400;
  }

  > div {
    width: 80px;
    height: 2px;
    margin-top: 30px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-image: linear-gradient(88deg, #717df7 20%, #a73de6 83%);
  }
`;
