import * as React from "react";

import { ChatInputContainer } from "./style";
import SendImg from "../../../../assets/paper-plane.png";

const ChatInput = (props : any) => {
  const [question, setQuestion] = React.useState('');
    
  const childFunction = () => {
      props.parentFunction(question); 
      console.log(question);
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  }

  const enter = () => {
    props.parentFunction(question); 
  }

  return (
    <ChatInputContainer>
      <input id='inputText' type="text" placeholder="질문을 입력하세요." onChange={onChange} />
      {/* <img src={SendImg} onClick={() => sendQuestion(chat)} alt="" /> */}
      <img src={SendImg} onClick={childFunction} onKeyUp={enter} alt="" />
    </ChatInputContainer>
  );
};

export default ChatInput;
