import * as React from 'react';

import {Button} from 'packages/DesignSystem'
import {TitleContainer, STitle} from './style';

const Title: React.FC = () => {
    return <TitleContainer>
        <STitle>나의 스크랩</STitle>
        <Button className="btn_setting">삭제</Button>
    </TitleContainer>
}

export default Title;