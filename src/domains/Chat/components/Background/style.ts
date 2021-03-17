import styled from "styled-components";

export const BackgroundContainer = styled.div`
width: 100%;
height: 98vh;
padding: 20px 0 0;
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
`;
