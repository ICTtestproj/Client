import * as React from "react";
import { Container, Contents, Overlay, Title, Close, Body, Line, Button, Array } from "./style";
import { TitleContainer } from "domains/Authentication/components/SignIn/Title/style"
import STitle from "packages/DesignSystem/Title"
import { setConstantValue } from "typescript";
import {convertToFormData} from 'utils/index';
import axios from 'axios';
import {GlobalContext} from 'packages/contexts/GlobalContext';


const Modal = (props : any) => {
  const { visible, closeModal } = props;

  const {accessToken} = React.useContext(GlobalContext)

  const [error, setError] = React.useState(false);
  const [modalState, setModalState] = React.useState(false);
  const content = props.content;
  const sequence = props.keyIndex;

  async function registerScrap() {
    console.log(props.keyIndex);
    
    try {
      setError(false);

      const data = {
        question: props.item[sequence].question,
        answer: props.item[sequence].answer
      }

      const formData = convertToFormData(data);

      const response = await axios({
        method: 'post',
        url: 'http://137.135.116.71/regscrap',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Accept': '*/*',
          'Content-Type': 'multipart/form-data;'
        },
        data: formData
      });
      
      console.log('질문 : ' + props.item[sequence].question + ', 답변 : ' + props.item[sequence].answer);
      console.log(response.data.result);
      // closeModal();
      setModalState(false);
    } catch (e) {
      setError(e);
    }
  }

  const closeClick = (event : any) => {
    event.preventDefault();
    setModalState(false);
  }

  const func = (event : any) => {
    registerScrap();
    closeClick(event);
  }

  return visible ? (
    <Container>
      <Overlay onClick={event => closeModal(event)} />
      <Contents>
          <Close onClick={event => closeModal(event)}>X</Close>
          <Title>{props.title}</Title>
          <Line></Line>
        <Body>{props.body}
          <Array>
            <div onClick={registerScrap}>
              <Button onClick={event => closeModal(event)}>예</Button>
            </div>
            <div>
            <Button onClick={event => closeModal(event)}>아니오</Button>
            </div>
          </Array>
        </Body>
      </Contents>
    </Container>
  ) : (
    <></>
  );
};

export default Modal;
