import * as React from 'react';

import {Button} from 'packages/DesignSystem';
import Prev from 'assets/pre.png';

const BtnToScrap: React.FC = () => {
    const handleMoveToScrap = React.useCallback(() => {
        window.location.hash = '#/mypage/scrap';
    }, []);

    return <div>
        <Button className="btn_move-page" onClick={handleMoveToScrap}>
            <>
                <img src={Prev} alt="" className="prev"/>
                나의 스크랩
            </>
        </Button>
    </div>
}

export default BtnToScrap;