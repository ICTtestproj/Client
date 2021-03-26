import * as React from 'react';
import {withRouter,RouteComponentProps} from 'react-router-dom';

import {MypageContext} from 'packages/contexts/MypageContext';

import {STitle, TitleContainer, BtnContainer} from './style';
import {Button} from 'packages/DesignSystem';

interface MatchParam {
    id: string;
}

const Title: React.FC<RouteComponentProps<MatchParam>> = ({match}) => {
    const { scrapList } = React.useContext(MypageContext);
    
    return <TitleContainer>
        <STitle>{scrapList[Number(match.params.id)].question}</STitle>
        <BtnContainer>
            <Button className="btn_setting">수정</Button>
            <Button className="btn_setting">삭제</Button>
        </BtnContainer>
    </TitleContainer>
}

export default withRouter(Title); 