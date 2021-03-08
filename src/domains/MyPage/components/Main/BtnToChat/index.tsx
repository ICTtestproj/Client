import * as React from 'react';

import {MoveBtnContainer} from './style';
import {Button} from '../../../../../packages/DesignSystem'
import Next from '../../../../../assets/next.png';

const BtnToChat: React.FC = () => {
    return <MoveBtnContainer>
        <Button className="btn_move-page">
            <>
                질문페이지
                <img src={Next} alt="" className="next"/> 
            </>
        </Button>
    </MoveBtnContainer>
};

export default BtnToChat; 