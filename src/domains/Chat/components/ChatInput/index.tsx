import * as React from "react";

import { ChatInputContainer } from "./style";
import SendImg from "../../../assets/paper-plane.png";

const ChatInput = () => {
  return (
    <ChatInputContainer>
      <input type="text" placeholder="질문을 입력하세요" />
      <img src={SendImg} alt="" />
    </ChatInputContainer>
  );
};

export default ChatInput;
