import * as React from "react";
import { ModalContainer, Contents, Overlay, Title, Close, Body, Line, Button, Array } from "./style";

import {ModalContext} from 'packages/contexts/ModalContext';

import {ModalProps} from '../../models/props';

const Modal: React.FC = () => {
  const {setIsAccepted, isModalOpened, setIsModalOpened, title, content } = React.useContext(ModalContext);

  React.useEffect(() => {
    console.log("?")
  }, [])

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
    setIsModalOpened(false);
  }, [setIsAccepted, setIsModalOpened]);

  const handleCancel = React.useCallback(() => {
    setIsAccepted(false);
    setIsModalOpened(false);
  }, [setIsAccepted, setIsModalOpened]);


  return( isModalOpened? 
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
    </ModalContainer> : <> </>
    );
};

export default Modal;
