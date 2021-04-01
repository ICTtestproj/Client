import * as React from "react";

import {GlobalContext} from 'packages/contexts/GlobalContext';
import {getMyName} from 'domains/MyPage/remotes';
import { MyInfoContainer, SubText, Name } from "./style";

const MyInfo: React.FC = () => {
  const {accessToken} = React.useContext(GlobalContext);
  const [name, setName] = React.useState<string>('');

  React.useEffect(() => {
    const getName = async () => {
      const response = await getMyName({accessToken});

      setName(response.result);
    }

    getName();

  }, [accessToken]);

  return (
    <MyInfoContainer>
      <SubText>신한은행의 미래를 함께하는</SubText>
      <Name>{name} 님</Name>
    </MyInfoContainer>
  );
};

export default MyInfo;
