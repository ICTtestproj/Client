import * as React from "react";

import { Button } from "../../../../../packages/DesignSystem";
import Pre from "../../../../../assets/pre.png";

const BtnToMypage: React.FC = () => {
    const handleMoveToMypage = React.useCallback(() => {
        window.location.hash = '/mypage';
    }, []);

    return <div>
        <Button className={'btn_move-page'} onClick={handleMoveToMypage}>
            <>
                <img src={Pre} alt="" className="prev"/>
                마이페이지
            </>
        </Button>
    </div>
  );
};

export default BtnToMypage;
