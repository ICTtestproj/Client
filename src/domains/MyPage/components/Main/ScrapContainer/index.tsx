import * as React from "react";

import { getMyScrap } from "../../../remotes";
import { GlobalContext } from "packages/contexts/GlobalContext";
import { MypageContext } from 'packages/contexts/MypageContext';

import { Button } from "packages/DesignSystem";
import Title from "../SubTitle";
import {
  ScrapList,
  ScrapListContainer,
  ScrapListItem,
  TitleContainer,
  Notification
} from "./style";

const ScrapContainer: React.FC = () => {
  const { accessToken } = React.useContext(GlobalContext);
  const { scrapList, setScrapList } = React.useContext(MypageContext);

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
        {scrapList.length > 0? scrapList.map(i => (
          <ScrapListItem>
            <h3>{i.question}</h3>
            <p>{i.answer}</p>
          </ScrapListItem>
        )): <Notification>정보가 존재하지 않습니다.</Notification>}
      </ScrapList>
    </ScrapListContainer>
  );
};

export default ScrapContainer;
