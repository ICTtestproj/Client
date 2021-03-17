import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState,
} from "react";

import axios from 'axios';

import Input from "../../packages/DesignSystem/Input";
import {GlobalContext} from '../../packages/contexts/GlobalContext';
import Background from "../../domains/Chat/components/Background"
import { BackgroundContainer, ChatContainer } from "../../domains/Chat/components/Background/style";
import ChatBox from "../../domains/Chat/components/ChatBox";
import ChatInput from "../../domains/Chat/components/ChatInput";

const Chat: React.FC = () => {

  const [token, setToken] = useState({
    access_token: 'a',
    result: false
  });
  
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState('');
  const [qqq, setQqq] = useState('');


  const [chatting, setChatting] = useState(
    [
      {
        content: [''],
        isQuestion: true
      }
    ]
  );

  async function getResponse(param : any) {
    try {
      console.log(param)
      setError(null);
      const response = await axios({
        method:'get',
        url:'http://137.135.116.71/chat',
        params: {
          question: {param}
        },
        headers: {
          'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiIiwiZXhwaXJlYXQiOiIyMDIxLzEwLzAzLCAwNjozMzo1OCJ9.PAvBeeNuQTicYYtS9sbZQPODqBMSnILplU2nADLkzWA',
          'Content-Type': 'application/json; charset=UTF-8'
        }
      });

      console.log('질문 : ' + param);
      setAnswer(response.data.answer);
    
      console.log('답변 : ' + answer);

      let ans = {
        content: [response.data.answer],
        isQuestion: false
      }
      
      setChatting([...chatting, ans]);

    } catch (e) {
      setError(e);
    }
  }

  const parentFunction = (chat : any) => {
    alert(chat);
    
    let Q = {
      content: [chat],
      isQuestion: true
    }

    setQuestion(chat);
    const temp = chatting;
    temp.push(Q);
    setChatting(temp);

    getResponse(chat);
} 

  return (
    <BackgroundContainer>
      <ChatContainer>
        {
          chatting.map((chat) => 
            // {
            //   {chat.content}[0].length == 0 ? 
            //   <div></div> 
            //   :
            <div>
              <ChatBox content={chat.content} question={chat.isQuestion}></ChatBox>
            </div>
            // }
          )
        }
        <ChatInput parentFunction={parentFunction}></ChatInput>
      </ChatContainer>
    </BackgroundContainer>
  );
};

export default Chat;
