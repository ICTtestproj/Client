import * as React from "react";
import { ModalContainer, Contents, Overlay, Title, Close, Body, Line, Button, Array } from "./style";

import {ModalProps} from '../../models/props';

const Modal: React.FC<ModalProps> = ({
    setIsAccepted,
    title,
    content,
    setModalState
}) => {

//   async function registerScrap() {
//     try {
//       const data = {
//         question: props.item[sequence].question,
//         answer: props.item[sequence].answer
//       }

//       const formData = convertToFormData(data);

//       const response = await axios({
//         method: 'post',
//         url: 'http://137.135.116.71/regscrap',
//         data: formData
//       });
      
//       console.log('질문 : ' + props.item[sequence].question + ', 답변 : ' + props.item[sequence].answer);
//       console.log(response.data.result);
//     } catch (e) {
//     }
//   }

  const handleAccept = React.useCallback(() => {
    setIsAccepted(true);
    setModalState(false);
  }, [setIsAccepted, setModalState]);

  const handleCancel = React.useCallback(() => {
    setIsAccepted(false);
    setModalState(false);
  }, [setIsAccepted, setModalState]);


  return(
    <ModalContainer className="colorful">
      <Overlay onClick={handleCancel} />
      <Contents>
          <Close onClick={handleCancel}>X</Close> 
          <Title>{title}</Title>
          <Line />
        <Body>{content}
          <Array>
            <Button onClick={handleAccept}>예</Button>
            <Button onClick={handleCancel}>아니오</Button>
          </Array>
        </Body>
      </Contents>
    </ModalContainer>
    );
};

export default Modal;
