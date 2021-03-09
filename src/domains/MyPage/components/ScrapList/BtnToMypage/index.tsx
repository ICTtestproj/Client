import * as React from 'react';

import {Button} from '../../../../../packages/DesignSystem';
import Pre from '../../../../../assets/pre.png';

const BtnToMypage: React.FC = () => {
    return <div>
        <Button className={'btn_move-page'} >
            <>
                <img src={Pre} alt="" className="prev"/>
                마이페이지
            </>
        </Button>
    </div>
}

export default BtnToMypage; 