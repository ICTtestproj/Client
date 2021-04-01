import styled from 'styled-components';

export const ScrapListContainer = styled.div`
    margin-top: 40px;
`;    

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ScrapList = styled.div`
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
  padding-bottom: 5px;

  &::-webkit-scrollbar{
    height: 5px;
  }

  &::-webkit-scrollbar-thumb{
    background: rgba(255,255,255, 0.1);
  } 
`;

export const ScrapListItem = styled.div`
  width: 150px;
  height: 220px;
  display: inline-block;
  margin-right: 15px;
  padding: 20px 15px;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  
  >h3 {
    width: 150px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 16px;
    font-size: 16px;
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    white-space: normal;
    height: 192px;
    line-height: 1.55;
  }
`;

export const Notification = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  margin-top: 15px;
`;