import * as React from 'react';
import {withRouter,RouteComponentProps} from 'react-router-dom';

import {GlobalContext} from 'packages/contexts/GlobalContext';
import {MypageContext} from 'packages/contexts/MypageContext';
import {ModalContext} from 'packages/contexts/ModalContext';
import { deleteScrap } from 'domains/MyPage/remotes';

import {STitle, TitleContainer, BtnContainer} from './style';
import {Button} from 'packages/DesignSystem';

interface MatchParam {
    id: string;
}

const Title: React.FC<RouteComponentProps<MatchParam>> = ({match}) => {
    const { accessToken } = React.useContext(GlobalContext);
    const { scrapList } = React.useContext(MypageContext);
    const { setContent, setIsModalOpened, setTitle, isAccepted } = React.useContext(ModalContext);
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
                id: selectedId
            });

            return response.result;
        }

        if(isAccepted) {
            deleteOneScrap();
            setSelectedId("");
        }
    }, [isAccepted, accessToken, selectedId]);

    return <TitleContainer>
        <STitle>{scrapList[Number(match.params.id)].question}</STitle>
        <BtnContainer>
            {/* <Button className="btn_setting">수정</Button> */}
            <Button className="btn_setting" onClick={handleClickDelete}>삭제</Button>
        </BtnContainer>
    </TitleContainer>
}

export default withRouter(Title); 