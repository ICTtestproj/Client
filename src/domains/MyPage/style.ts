import styled from "styled-components";

export const SubTitle = styled.h2`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 14px;
  text-align: left;
  color: #ffffff;
`;

export const KeywordContainer = styled.div`
  display: inline-block;
  height: 40px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  > p {
    font-weight: 300;
    color: white;
    font-size: 15px;
  }
`;

export const NameContainer = styled.div`
  > p {
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 12px;
    text-align: left;
    color: #ffffff;
  }

  > h1 {
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 24px;
    text-align: left;
    color: #ffffff;
  }
`;

export const FAQContainer = styled.div`
  width: 370px;
  height: 40px;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(255, 255, 255, 0.25);

  > p {
    font-weight: 300;
    color: white;
    font-size: 15px;
  }
`;

export const ScrapQnAContainer = styled.div`
  width: 159px;
  height: 240px;
  padding: 20px 15px;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(255, 255, 255, 0.25);

  > p {
    font-weight: 300;
    color: white;
    font-size: 15px;
  }
`;
