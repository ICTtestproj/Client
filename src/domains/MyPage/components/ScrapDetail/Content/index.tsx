import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {MypageContext} from 'packages/contexts/MypageContext';

import {ContentContainer} from './style';

interface MatchParam {
    id: string;
}

const Content: React.FC<RouteComponentProps<MatchParam>> = ({match}) => {
    const {scrapList} = React.useContext(MypageContext);

    return <ContentContainer>{scrapList.filter(i => i.id === match.params.id)[0]?.answer}</ContentContainer>
};

export default withRouter(Content);