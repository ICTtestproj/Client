import * as React from "react";

import Star from "assets/star.png";
import { ChatBoxContainer, ScrapBtn } from "./style";

const ChatBox = (props : any) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const handleMouseOver = React.useCallback(() => {
    if(!props.question) 
      setIsHover(true);
  }, []);
  const handleMouseOut = React.useCallback(() => {
    setIsHover(false);
  }, []);

  const content = props.content;
  let style;

  if(props.question) {
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

  return (
    <ChatBoxContainer
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      style={style}
    >
      <div>
        <pre>{content[0]}</pre>
        {
          content[1] == null ? <div> </div> :
          <div>
            <div className ="inbox" onClick={anotherQuestion}>{content[1]}</div>
            <div className ="inbox">{content[2]}</div>
          </div>
        }
      </div>
      <ScrapBtn isHover={isHover}>
        <p>스크랩</p>
        <img src={Star} alt="" />
      </ScrapBtn>
    </ChatBoxContainer>
  );
};

export default ChatBox;
