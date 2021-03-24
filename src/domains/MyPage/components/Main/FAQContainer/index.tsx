import * as React from "react";

import { getOftenAsked } from "domains/MyPage/remotes";
import { GlobalContext } from "packages/contexts/GlobalContext";

import SubTitle from "../SubTitle";
import { FAQListContainer, FAQList, FAQListItem,Notification } from "./style";

const FAQContainer: React.FC = () => {
  const [oftenAskedList, setOftenAskedList] = React.useState<string[]>([]);
  const { accessToken } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const getLastAskList = async () => {
      const response = await getOftenAsked({ accessToken });

      setOftenAskedList(response.result.map(i => i.question));
    };

    getLastAskList();
  }, []);

  return (
    <FAQListContainer>
      <SubTitle>자주 묻는 질문</SubTitle>
      <FAQList>
        {
          oftenAskedList.length > 0? 
          
        oftenAskedList.map(i => (
          <FAQListItem>{i}</FAQListItem>
        )) : <Notification>정보가 존재하지 않습니다.</Notification>
        }
      </FAQList>
    </FAQListContainer>
  );
};

export default FAQContainer;
