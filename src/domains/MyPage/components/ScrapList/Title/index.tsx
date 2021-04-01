import * as React from 'react';

import {MypageContext} from 'packages/contexts/MypageContext';

import {Button} from 'packages/DesignSystem'
import {TitleContainer, STitle} from './style';

const Title: React.FC = () => {
    const { isScrapListEditMode, setIsScrapListEditMode } = React.useContext(MypageContext);

    const handleClickSetting = React.useCallback(() => {
        setIsScrapListEditMode(!isScrapListEditMode);
    }, [isScrapListEditMode, setIsScrapListEditMode]);

    return <TitleContainer>
        <STitle>나의 스크랩</STitle>
        {/* <Button className="btn_setting"  onClick={handleClickSetting}>{isScrapListEditMode? '완료' : '삭제'}</Button> */}
    </TitleContainer>
}

export default Title; 