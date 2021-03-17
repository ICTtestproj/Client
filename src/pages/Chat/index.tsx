import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState,
} from "react";

import Input from "../../packages/DesignSystem/Input";
import {GlobalContext} from '../../packages/contexts/GlobalContext';

const Chat: React.FC = () => {
  const [name, setName] = useState<string>("");
  const {accessToken} = React.useContext(GlobalContext);

  React.useEffect(() => {
    if(!accessToken) window.location.hash = "#/signin";
  }, [accessToken]);

  const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  return (
    <>
      <Input isAct={false}>
        <label htmlFor="">이름</label>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => handleChangeName(e)}
          />
          <button>인증번호</button>
        </div>
      </Input>
    </>
  );
};

export default Chat;
