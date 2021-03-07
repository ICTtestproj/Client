import * as React from "react";

import SubTitle from "../SubTitle";
import { KeywordsListContainer, KeywordList, KeywordItem } from "./style";

const KeywordsContainer: React.FC = () => {
  return (
    <KeywordsListContainer>
      <SubTitle>최근 검색어</SubTitle>
      <KeywordList>
        <KeywordItem>asdfadsf</KeywordItem>
        <KeywordItem>asdfadsf</KeywordItem>
        <KeywordItem>asdfadsf</KeywordItem>
        <KeywordItem>asdfadsf</KeywordItem>
        <KeywordItem>asdfadsf</KeywordItem>
        <KeywordItem>asdfadsf</KeywordItem>
        <KeywordItem>asdfadsf</KeywordItem>
      </KeywordList>
    </KeywordsListContainer>
  );
};

export default KeywordsContainer;
