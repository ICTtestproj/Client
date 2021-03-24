import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Contents = styled.div`
  position: relative;
  width: 370px;
  height: 138px;
  margin: 16px 0 0 10px;
  padding: 8px 0 25px;
  opacity: 0.75;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  color: #c0b1cd;
`;

const Array = styled.div`
    display:flex; 
    align-items: flex-end;
`;

const Title = styled.div`
    width: 101px;
    height: 31px;
    margin: 7px 134px 12px 135px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    font-family: NanumSquare_acB;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: left;
    color: #62536e;
`;

const Line = styled.div`
    width: 50px;
    height: 2px;
    margin: 5px 160px 0 160px;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-image: linear-gradient(87deg, #717df7 20%, #a73de6 83%);
`;

const Button = styled.div`
  width: 85px;
  height: 20px;
  margin: 15px 20px 15px 0px;
  padding: 12px 15px 11px 10px;
  opacity: 0.55;
  border-radius: 10px;
  text-align: center;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: NanumSquare_acB;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #c0acd1;
  color: #231c2b;
  cursor: pointer;
`;

const Close = styled.div`
  position: absolute;
  margin-right: 15px;
  color: gray;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Body = styled.div`
    width: 265px;
    height: 20px;
    margin: 16px 67px 70px 68px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    font-family: NanumSquare_acB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: left;
    color: #231c2b;
`;

export { Container, Contents, Overlay, Title, Close, Body, Line, Button, Array };
