import * as React from "react";

import Star from "../../../assets/star.png";
import { ChatBoxContainer, ScrapBtn } from "./style";

const ChatBox = () => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const handleMouseOver = React.useCallback(() => {
    setIsHover(true);
  }, []);
  const handleMouseOut = React.useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <ChatBoxContainer
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div>
        <pre>IP 주소 어떻게 보나요?</pre>
      </div>
      <ScrapBtn isHover={isHover}>
        <p>스크랩</p>
        <img src={Star} alt="" />
      </ScrapBtn>
    </ChatBoxContainer>
  );
};

export default ChatBox;
