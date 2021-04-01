import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState,
} from "react";

import {GlobalContext} from '../../packages/contexts/GlobalContext';
import { BackgroundContainer, ChatContainer } from "../../domains/Chat/components/Background/style";
import ChatBox from "../../domains/Chat/components/ChatBox";
import ChatInput from "../../domains/Chat/components/ChatInput";
import Modal from '../../domains/Chat/components/Modal';
import {BtnToMypage} from '../../domains/MyPage/components/ScrapList';

import axios from 'axios';

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

const Chat: React.FC = () => {
  let introduce = {
    content: ['안녕하세요. 저는 LEGO 챗봇입니다. 질문을 마음껏 입력해주세요.'],
    isQuestion: false,
    index: -1
  }
  const {accessToken} = React.useContext(GlobalContext);
  const [answer, setAnswer] = useState<string[]>([]);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState('');
  const [chatting, setChatting] = useState<ChattingListItem[]>([introduce]);
  const [scrap, setScrap] = useState<scrapItem[]>([]);
  const [count, setCount] = useState(0);
  const [waiting, setWaiting] = useState(false);

  // ----- 답변 받기 -----
  async function getResponse(param: any) {
    let ans = {
      content: ['...'],
      isQuestion: false,
      index: count
    }
    // scrollToBottom();
    setChatting([...chatting, ans]);
    setWaiting(true);
    scrollToBottom();

    

    try {
      // console.log(param.replace(' ', '%20'));
      // const replaceChat = encodeURIComponent(param);
      const replaceChat = param;
      setError(null);
      const response = await axios({
        method: 'get',
        url: 'http://137.135.116.71/chat',
        params: {
          question: replaceChat
        },
        headers: {
          'Authorization': 'Bearer ' + accessToken,
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

      scrollToBottom();
      setWaiting(false);

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
      setWaiting(false);
    }
  }

  // ----- 질문하기 -----
  const parentFunction = (chat: any) => {
    console.log('웨이팅은 : ' + waiting);
    if(!waiting) {
      let question = {
        content: [chat],
        isQuestion: true,
        index: count
      }

      setQuestion(chat);
      const tempChatting = chatting;
      tempChatting.push(question);
      setChatting(tempChatting);
      scrollToBottom();
      getResponse(chat);
    } else {
      return(
        <Modal></Modal>
      )
    }
  }

  // ----- 버튼으로 질문하기 -----
  const anotherQuestion = (other: any) => {
    console.log('웨이팅은 : ' + waiting);
    if(!waiting) {
      let question = {
        content: [other],
        isQuestion: true,
        index: count
      }

      setQuestion(other);
      const tempChatting = chatting;
      tempChatting.push(question);
      setChatting(tempChatting);
      scrollToBottom();
    } else alert('잠시만 기다려주세요!');
    // getResponse(other);
  }
  
  const scrollToBottom = () => {
    console.log("~스 크 롤 바 이 동 합 니 다 ~");
    var scroll = document.getElementById('scrollBar');
    scroll?.scrollIntoView({behavior: "smooth", block: "end"});
    // scroll?.scrollTo({top:99999, behavior:'smooth'});
  }

  return (
    <div className="colorful chatting">
      <BtnToMypage />
      <ChatContainer>
        <div id='scrollBar' style={{ paddingBottom: '80px', boxSizing: 'border-box'}}>
        {
          chatting.map((chat) =>
            <div>
              <ChatBox content={chat.content} question={chat.isQuestion}
                parentFunction={anotherQuestion} item={scrap} keyIndex={chat.index}></ChatBox>
            </div>
          )
        }
      </div>
      </ChatContainer>
      <ChatInput parentFunction={parentFunction}></ChatInput>
    </div>
  );
};

export default Chat;
