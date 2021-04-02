import * as React from 'react';

import { MypageContext } from 'packages/contexts/MypageContext';

import ScrapDeleteModal from '../ScrapDeleteModal';
import {ListContainer, ListItem} from './style';
import Next from 'assets/next.png';
import Delete from 'assets/cancel.png'

const ScrapListContainer: React.FC = () => {
    const {isScrapListEditMode, scrapList, setScrapList} = React.useContext(MypageContext);

    const [isAccepted, setIsAccepted] = React.useState<boolean>(false);
    const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false);

    const handleClickListItem = React.useCallback((id: string) => {
        if(!isScrapListEditMode) window.location.hash = `#/mypage/scrap/${id}`;
    }, [isScrapListEditMode]);
    const handleClickDelete = React.useCallback((index: number) => {
        if(isScrapListEditMode){
            setIsModalOpened(true);
        };
    }, [isScrapListEditMode, scrapList, setScrapList]);
    // const handleDeleteScrap = React.useCallback((index: number) => {
    //     if(isScrapListEditMode){
    //         setIsModalOpened(true);
    //     };
    // }, [isScrapListEditMode, scrapList, setScrapList]);

    

    return (<>
        {isModalOpened && <ScrapDeleteModal setModalState={setIsModalOpened} setIsAccepted={setIsAccepted} />} 
        <ListContainer>
            { scrapList.length < 1 ? <p>정보가 존재하지 않습니다.</p> :
                scrapList.map((scrap, index) => 
                    <ListItem onClick={() => handleClickListItem(scrap.id)} key={scrap.id}>
                        <p>{index +1}. {scrap.question}</p>
                        <img src={isScrapListEditMode? Delete : Next} alt="" onClick={() => handleClickDelete(index)}/>
                    </ListItem>)
            }
            
        </ListContainer>
    </>
    )
}

export default ScrapListContainer;