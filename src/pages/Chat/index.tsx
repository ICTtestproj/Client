import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState,
} from "react";

import axios from 'axios';

import Input from "../../packages/DesignSystem/Input";
import Background from "../../domains/Chat/components/Background"
import { BackgroundContainer, ChatContainer } from "../../domains/Chat/components/Background/style";
import ChatBox from "../../domains/Chat/components/ChatBox";
import ChatInput from "../../domains/Chat/components/ChatInput";
import {BtnToMypage} from '../../domains/MyPage/components/ScrapList';

interface ChattingListItem {
  content: string[];
  isQuestion: boolean;
}

const Main = () => {

  // const [token, setToken] = useState({
  //   access_token: '',
  //   result: false
  // });
  
  const [answer, setAnswer] = useState<string[]>([]);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState('');
  const [qqq, setQqq] = useState('');


  const [chatting, setChatting] = useState<ChattingListItem[]>([]);

  async function getResponse(param : any) {
    try {
      // console.log(param.replace(' ', '%20'));
      // const replaceChat = encodeURIComponent(param);
      const replaceChat = param;
      console.log(replaceChat);
      setError(null);
      const response = await axios({
        method:'get',
        url:'http://137.135.116.71/chat',
        params: {
          question: replaceChat
        },
        headers: {
          'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiIiwiZXhwaXJlYXQiOiIyMDIxLzEwLzAzLCAwNjozMzo1OCJ9.PAvBeeNuQTicYYtS9sbZQPODqBMSnILplU2nADLkzWA',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });

      const resAnswer: string[] = [];
      console.log('질문 : ' + param);
      if(response.data.id != -1) {
      resAnswer.push(response.data.answer);
      console.log('답변 : ' + response.data.answer);
      } else {
        resAnswer.push('무슨 말인지 잘 모르겠어요!')
      }
      
      if(response.data.id != -1 && response.data.context.prompts[0] != null && response.data.context.prompts[0].displayText != null) {
        resAnswer.push(response.data.context.prompts[0].displayText);
      }

      setAnswer(resAnswer);
      console.log('답변 : ' + answer);

      let ans = {
        content: resAnswer,
        isQuestion: false
      }
      
      setChatting([...chatting, ans]);

    } catch (e) {
      setError(e);
    }
  }

  const parentFunction = (chat : any) => {
    // alert(chat);
    
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

const otherQ = (other : any) => {
  // alert(other);
  
  let Q = {
    content: [other],
    isQuestion: true
  }

  setQuestion(other);
  const temp = chatting;
  temp.push(Q);
  setChatting(temp);

  getResponse(other);
} 

  return (
    <BackgroundContainer>
      <div style={{marginLeft: '30px'}}>
        <BtnToMypage/>
      </div>
      <ChatContainer>
        <div style={{paddingBottom: '80px', boxSizing: 'border-box'}}>
          {
          chatting.map((chat) => 
            <div>
              <ChatBox content={chat.content} question={chat.isQuestion} parentFunction={otherQ}></ChatBox>
            </div>
          )
        }
        </div>
        <ChatInput parentFunction={parentFunction}></ChatInput>
      </ChatContainer>
    </BackgroundContainer>
  );
};

export default Main;
