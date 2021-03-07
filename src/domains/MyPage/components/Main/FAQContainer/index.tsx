import * as React from 'react';

import SubTitle from '../SubTitle';
import {FAQList, FAQListItem} from './style';

const FAQContainer: React.FC = () => {
    return <FAQList>
        <SubTitle>자주 묻는 질문</SubTitle>
        <ul>
            <FAQListItem>sdlfgkj</FAQListItem>
            <FAQListItem>sdlfgkj</FAQListItem>
        </ul>
    </FAQList> 
}

export default FAQContainer;