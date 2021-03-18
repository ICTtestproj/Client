import * as React from 'react';

import {MoveBtnContainer} from './style';
import {Button} from '../../../../../packages/DesignSystem'
import Next from '../../../../../assets/next.png';

const BtnToChat: React.FC = () => {
    const handleMoveToMain = React.useCallback(() => {
        window.location.hash= '/chat';
    }, []);

    return <MoveBtnContainer>
        <Button className="btn_move-page" onClick={handleMoveToMain}>
            <>
                질문페이지
                <img src={Next} alt="" className="next"/> 
            </>
        </Button>
    </MoveBtnContainer>
};

export default BtnToChat; 