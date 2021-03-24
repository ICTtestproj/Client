import * as React from 'react';

import {STitle, TitleContainer, BtnContainer} from './style';
import {Button} from 'packages/DesignSystem'

const Title: React.FC = ( ) => {
    return <TitleContainer>
        <STitle>어쩌구저쩌구</STitle>
        <BtnContainer>
            <Button className="btn_setting">수정</Button>
            <Button className="btn_setting">삭제</Button>
        </BtnContainer>
    </TitleContainer>
}

export default Title; 