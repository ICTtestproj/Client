import * as React from 'react';
import {withRouter,RouteComponentProps} from 'react-router-dom';

import {GlobalContext} from 'packages/contexts/GlobalContext';
import {MypageContext} from 'packages/contexts/MypageContext';
import {ModalContext} from 'packages/contexts/ModalContext';
import { deleteScrap } from 'domains/MyPage/remotes';

import {STitle, TitleContainer, BtnContainer} from './style';
import {Button} from 'packages/DesignSystem';
import Modal from 'domains/Common/components/Modal';

interface MatchParam {
    id: string;
}

const Title: React.FC<RouteComponentProps<MatchParam>> = ({match}) => {
    const { accessToken } = React.useContext(GlobalContext);
    const { scrapList, setScrapList } = React.useContext(MypageContext);
    const { setContent, setIsModalOpened, setTitle, isAccepted, setIsAccepted } = React.useContext(ModalContext);
    const [selectedId, setSelectedId] = React.useState<string>('');

    const handleClickDelete = React.useCallback(() => {
        setTitle('DELETE');
        setContent('해당 스크랩을 삭제하시겠습니까?');
        setIsModalOpened(true);
    }, [setTitle, setContent, setIsModalOpened]);

    React.useEffect(() => {
        const deleteOneScrap = async () => {
            const response = await deleteScrap({
                accessToken,
                id: match.params.id
            });

            return response.result;
        }
        if(isAccepted) {
            setSelectedId(match.params.id);
            console.log(selectedId);
            deleteOneScrap();
            setSelectedId("");
            setIsAccepted(false);
            setScrapList(scrapList.filter(i => i.id !== match.params.id));
            window.location.hash = "#/mypage/scrap";
        }
    }, [isAccepted, accessToken, selectedId, match, setIsAccepted, setScrapList, scrapList]);

    return <> 
        <TitleContainer>
            <STitle>{scrapList.filter(i => i.id === match.params.id)[0]?.question}</STitle>
            <BtnContainer>
                <Button className="btn_setting" onClick={handleClickDelete}>삭제</Button>
            </BtnContainer>
        </TitleContainer>
        <Modal />
    </>
}

export default withRouter(Title); 