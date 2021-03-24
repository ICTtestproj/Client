import * as React from "react";

import { getLastAsk } from "../../../remotes";
import { GlobalContext } from "../../../../../packages/contexts/GlobalContext";

import SubTitle from "../SubTitle";
import { KeywordsListContainer, KeywordList, KeywordItem } from "./style";

const KeywordsContainer: React.FC = () => {
  const [lastAskList, setLastAskList] = React.useState<string[]>([]);
  const { accessToken } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const getLastAskList = async () => {
      const response = await getLastAsk({ accessToken });

      setLastAskList(response.result.map(i => i.question));
    };

    getLastAskList();
  }, []);

  return (
    <KeywordsListContainer>
      <SubTitle>최근 검색어</SubTitle>
      <KeywordList className="keywords">
        {lastAskList.map(i => (
          <KeywordItem>{i}</KeywordItem>
        ))}
      </KeywordList>
    </KeywordsListContainer>
  );
};

export default KeywordsContainer;
