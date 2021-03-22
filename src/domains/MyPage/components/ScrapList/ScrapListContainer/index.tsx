import * as React from 'react';

import { MypageContext } from '../../../../../packages/contexts/MypageContext';

import {ListContainer, ListItem} from './style';
import Next from '../../../../../assets/next.png';

const ScrapListContainer: React.FC = () => {
    const { scrapList, setScrapList } = React.useContext(MypageContext);

    return <ListContainer>
        {
            scrapList.map((scrap, index) => 
                <ListItem>
                    <p>{index +1}. {scrap.question}</p>
                    <img src={Next} alt=""/>
                </ListItem>)
        }
        
    </ListContainer>
}

export default ScrapListContainer;