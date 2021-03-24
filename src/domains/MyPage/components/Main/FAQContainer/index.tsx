import * as React from "react";

import { getOftenAsked } from "../../../remotes";
import { GlobalContext } from "../../../../../packages/contexts/GlobalContext";

import SubTitle from "../SubTitle";
import { FAQList, FAQListItem } from "./style";

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
    <FAQList>
      <SubTitle>자주 묻는 질문</SubTitle>
      <ul>
        {oftenAskedList.map(i => (
          <FAQListItem>{i}</FAQListItem>
        ))}
      </ul>
    </FAQList>
  );
};

export default FAQContainer;
