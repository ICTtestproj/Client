import * as React from 'react';

import {BtnToMypage, Title, ScrapListContainer} from 'domains/MyPage/components/ScrapList';

const Scrap: React.FC = () => {
    return <div className="colorful">
        <BtnToMypage></BtnToMypage>
        <Title />
        <ScrapListContainer></ScrapListContainer>
    </div>
}

export default Scrap;