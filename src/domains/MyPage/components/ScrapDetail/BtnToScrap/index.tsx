import * as React from 'react';

import {Button} from 'packages/DesignSystem';
import Prev from 'assets/pre.png';

const BtnToScrap: React.FC = () => {
    return <div>
        <Button className="btn_move-page">
            <>
                <img src={Prev} alt="" className="prev"/>
                나의 스크랩
            </>
        </Button>
    </div>
}

export default BtnToScrap;