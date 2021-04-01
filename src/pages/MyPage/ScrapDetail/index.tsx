import * as React from 'react';

import {BtnToScrap, Title, Content} from 'domains/MyPage/components/ScrapDetail';

const ScrapDetail: React.FC = () => {
    return <div className="colorful">
        <BtnToScrap />
        <Title/>
        <Content />
    </div>
};

export default ScrapDetail;