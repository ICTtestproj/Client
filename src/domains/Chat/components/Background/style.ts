import styled from "styled-components";

export const BackgroundContainer = styled.div`
width: 120%;
height: 98vh;
padding: 0;
opacity: 1;
-webkit-backdrop-filter: blur(30px);
backdrop-filter: blur(30px);
background-image: linear-gradient(23deg, #717df7 11%, #a73de6 90%);

background-repeat: no-repeat;
background-attachment: fixed;
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar{
    width: 5px;
  }

  &::-webkit-scrollbar-thumb{
    background: rgba(255,255,255, 0.1);
  }
`;
