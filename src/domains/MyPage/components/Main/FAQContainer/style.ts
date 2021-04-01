import styled from "styled-components";

export const FAQListContainer = styled.div`
  margin-top: 50px;
`;

export const FAQList = styled.ul`
  height: 85px;
`;

export const FAQListItem = styled.li`
  height: 35px;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(255,255,255,0.25);
  font-weight: 300;
  font-size: 15px;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-top: 15px;
`;

export const Notification = styled.li`
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  margin-top: 15px;
`;