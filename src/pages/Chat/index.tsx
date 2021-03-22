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
import { BtnToMypage } from '../../domains/MyPage/components/ScrapList';
import Modal from '../../domains/Chat/components/Modal'

interface ChattingListItem {
  content: string[];
  isQuestion: boolean;
  index: number;
}

interface scrapItem {
  index: number;
  question: string;
  answer: string;
}

const Main = () => {
  const [answer, setAnswer] = useState<string[]>([]);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState('');
  const [chatting, setChatting] = useState<ChattingListItem[]>([]);
  const [scrap, setScrap] = useState<scrapItem[]>([]);
  const [count, setCount] = useState(0);

  // let introduce = {
  //   content: ['안녕하세요.'],
  //   isQuestion: false,
  //   index: -1
  // }

  // setChatting([...chatting, introduce]);

  async function getResponse(param: any) {
    try {
      // console.log(param.replace(' ', '%20'));
      // const replaceChat = encodeURIComponent(param);
      const replaceChat = param;
      console.log(replaceChat);
      setError(null);
      const response = await axios({
        method: 'get',
        url: 'http://137.135.116.71/chat',
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
      if (response.data.id != -1) resAnswer.push(response.data.answer);
      else resAnswer.push('무슨 말인지 잘 모르겠어요!');

      if (response.data.id != -1 && response.data.context.prompts[0] != null && response.data.context.prompts[0].displayText != null) {
        resAnswer.push(response.data.context.prompts[0].displayText);
      }

      setAnswer(resAnswer);
      console.log('답변 : ' + answer);

      let ans = {
        content: resAnswer,
        isQuestion: false,
        index: count
      }

      setChatting([...chatting, ans]);

      let tempScrap = {
        index: count,
        question: param,
        answer: resAnswer[0]
      }

      const scrapList = scrap;
      scrapList.push(tempScrap);

      setScrap(scrapList);
      console.log(count);
      setCount(count + 1);
    } catch (e) {
      setError(e);
    }
  }

  // 다른 질문을 해야할 때
  const parentFunction = (chat: any) => {
    let question = {
      content: [chat],
      isQuestion: true,
      index: count
    }

    setQuestion(chat);
    const tempChatting = chatting;
    tempChatting.push(question);
    setChatting(tempChatting);
    getResponse(chat);
  }

  const anotherQuestion = (other: any) => {
    let question = {
      content: [other],
      isQuestion: true,
      index: count
    }

    setQuestion(other);
    const tempChatting = chatting;
    tempChatting.push(question);
    setChatting(tempChatting);
    getResponse(other);
  }

  return (
    <BackgroundContainer>
      <div style={{ marginLeft: '30px' }}>
        <BtnToMypage />
      </div>
      {/* <Modal></Modal> */}
      <ChatContainer>
        <div style={{ paddingBottom: '80px', boxSizing: 'border-box'}}>
          {
            chatting.map((chat) =>
              <div>
                <ChatBox content={chat.content} question={chat.isQuestion}
                  parentFunction={anotherQuestion} item={scrap} keyIndex={chat.index}></ChatBox>
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
