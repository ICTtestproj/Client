import * as React from "react";

import Star from "assets/star.png";
import { ChatBoxContainer, ScrapBtn } from "./style";
import Modal from 'domains/Chat/components/Modal';
import axios from 'axios';
import {convertToFormData} from 'utils/index';
import { ChatContainer } from "../Background/style";

const ChatBox = (props: any) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const [error, setError] = React.useState(null);
  const [modalState, setModalState] = React.useState(false);

  const handleMouseOver = React.useCallback(() => {
    if (!props.question)
      setIsHover(true);
    if(props.keyIndex == -1)
      setIsHover(false);
  }, []);

  const handleMouseOut = React.useCallback(() => {
    setIsHover(false);
  }, []);

  const content = props.content;
  const sequence = props.keyIndex;
  let style;

  if (props.question) {
    style = {
      alignItems: "flex-end"
    }
  } else {
    style = {
      alignItems: "flex-start"
    }
  }

  const anotherQuestion = () => {
    const other = content[1];
    props.parentFunction(other);
    console.log(other);
  }

  
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event : any) => {
    event.preventDefault();
    setModalState(false);
  };
  
  return (
    <div>
    <Modal visible={modalState} closeModal={closeModal} item={props.item} keyIndex={sequence} title={'REGISTER'} body={'해당 답변을 스크랩하시겠습니까?'}></Modal>
      <ChatBoxContainer
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        style={style}
        id='scrollB'
      >
        <div>
          <pre>{content[0]}</pre>
          {
            content[1] == null ? <div> </div> :
              <div>
                <div className="inbox" onClick={anotherQuestion}>{content[1]}</div>
                <div className="inbox">{content[2]}</div>
              </div>
          }
        </div>
        <ScrapBtn isHover={isHover} onClick={openModal}>
          <p>스크랩</p>
          <img src={Star} alt="" />
        </ScrapBtn>
      </ChatBoxContainer>
    </div>
  );
};

export default ChatBox;
