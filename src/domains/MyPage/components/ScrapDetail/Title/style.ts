import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 90px;
`;

export const STitle = styled.h1`
 text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-weight: normal;
  font-size: 28px;
  text-align: left;
  color: #ffffff;
`;

export const BtnContainer = styled.div`
    display: inline;
    > button:first-child{
        margin-right: 10px;
    }
`;