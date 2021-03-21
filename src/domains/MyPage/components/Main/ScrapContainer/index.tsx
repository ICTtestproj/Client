import * as React from "react";

import { getMyScrap } from "../../../remotes";
import { GlobalContext } from "../../../../../packages/contexts/GlobalContext";

import { Button } from "../../../../../packages/DesignSystem";
import Title from "../SubTitle";
import {
  ScrapList,
  ScrapListContainer,
  ScrapListItem,
  TitleContainer
} from "./style";

interface ScrapItem {
  question: string;
  answer: string;
}

const ScrapContainer: React.FC = () => {
  const [scrapList, setScrapList] = React.useState<ScrapItem[]>([]);
  const { accessToken } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const getLastAskList = async () => {
      const response = await getMyScrap({ accessToken });

      setScrapList(response.result);
    };

    getLastAskList();
  }, []);

  const handleClickScrapBtn = React.useCallback(() => {
    window.location.hash = "#/mypage/scrap";
  }, []);

  return (
    <ScrapListContainer>
      <TitleContainer>
        <Title>나의 스크랩</Title>
        <Button className="btn_setting" onClick={handleClickScrapBtn}>
          전체보기
        </Button>
      </TitleContainer>
      <ScrapList>
        {scrapList.map(i => (
          <ScrapListItem>{i.answer}</ScrapListItem>
        ))}
      </ScrapList>
    </ScrapListContainer>
  );
};

export default ScrapContainer;
