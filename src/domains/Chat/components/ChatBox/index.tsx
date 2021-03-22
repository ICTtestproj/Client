import * as React from "react";

import Star from "../../../../assets/star.png";
import { ChatBoxContainer, ScrapBtn } from "./style";
import Modal from '../../../../domains/Chat/components/Modal'
import axios from 'axios';
import {convertToFormData} from '../../../../utils/index'

const ChatBox = (props: any) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const [error, setError] = React.useState(null);
  const handleMouseOver = React.useCallback(() => {
    if (!props.question)
      setIsHover(true);
  }, []);
  const handleMouseOut = React.useCallback(() => {
    setIsHover(false);
  }, []);

  const content = props.content;
  const sequence = props.keyIndex;
  let style;

  if (props.question) {
    style = {
      marginLeft: '0px',
      marginRight: '30px',
      alignItems: "flex-end"
    }
  } else {
    style = {
      marginLeft: '30px',
      marginRight: '0px',
      alignItems: "flex-start"
    }
  }

  const anotherQuestion = () => {
    const other = content[1];
    props.parentFunction(other);
    console.log(other);
  }

  const Modal = (props: any) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={open ? 'openModal modal' : 'modal'}>
        { open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}> &times; </button>
            </header>
            <main>
              {props.children}
            </main>
            <footer>
              <button className="close" onClick={close}> close </button>
            </footer>
          </section>
        ) : null}
      </div>
    )
  }

  async function registerScrap() {
    try {
      setError(null);

      const data = {
        question: props.item[sequence].question,
        answer: props.item[sequence].answer
      }

      const formData = convertToFormData(data);

      const response = await axios({
        method: 'post',
        url: 'http://137.135.116.71/regscrap',
        headers: {
          'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiIiwiZXhwaXJlYXQiOiIyMDIxLzEwLzAzLCAwNjozMzo1OCJ9.PAvBeeNuQTicYYtS9sbZQPODqBMSnILplU2nADLkzWA',
          // 'User-Agent': 'PostmanRuntime/7.26.10',
          'Accept': '*/*',
          // 'Cache-Control': 'no-cache',
          // 'Postman-Token': '039a1414-cad1-4b13-93e7-5bf9df70501b',
          // 'Host': '137.135.116.71',
          // 'Accept-Encoding': 'gzip, deflate, br',
          // 'Keep-Alive': '300',
          // 'Connection': 'keep-alive',
          'Content-Type': 'multipart/form-data;'
        },
        data: formData
        // {
          // question: props.item[sequence].question,
          // answer: props.item[sequence].answer
          // answer: 'bb',
          // question: 'aa'
        // }
      });
      console.log('질문 : ' + props.item[sequence].question + ', 답변 : ' + props.item[sequence].answer);
      console.log(response.data.result);
    } catch (e) {
      setError(e);
    }
  }

  // const [modalOpen, setModalOpen] = React.useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // }
  // const closeModal = () => {
  //   setModalOpen(false);
  // }

  return (
    <ChatBoxContainer
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      style={style}
    >

      {/* <React.Fragment>
     <button onClick={ openModal }>모달팝업</button>
       <Modal open={ modalOpen } close={ closeModal } header="Modal heading">
        리액트 함수형 모달 팝업창입니다.
        쉽게 만들 수 있어요. 
        같이 만들어봐요!
       </Modal>
    </React.Fragment> */}
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
      <ScrapBtn isHover={isHover} onClick={registerScrap}>
        <p>스크랩</p>
        <img src={Star} alt="" />
      </ScrapBtn>
    </ChatBoxContainer>
  );
};

export default ChatBox;
