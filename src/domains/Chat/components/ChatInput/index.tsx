import * as React from "react";

import { ChatInputContainer } from "./style";
import SendImg from "../../../../assets/paper-plane.png";

const ChatInput = (props : any) => {
  const [question, setQuestion] = React.useState('');
  const [holder, setHolder] = React.useState('질문을 입력하세요.');
    
  const childFunction = () => {
      props.parentFunction(question); 
      console.log(question);
      setHolder('질문을 입력하세요.'); 
      console.log('질문입력');
      setQuestion('');
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") 
      childFunction();
  };

  return (
    <ChatInputContainer>
      <input id='inputText' type="text" placeholder='질문을 입력하세요.' onChange={onChange} value={question} onKeyPress={(e)=>handleEnter(e)} />
      {/* <img src={SendImg} onClick={() => sendQuestion(chat)} alt="" /> */}
      <img src={SendImg} onClick={childFunction} alt="" />
    </ChatInputContainer>
  );
};

export default ChatInput;
