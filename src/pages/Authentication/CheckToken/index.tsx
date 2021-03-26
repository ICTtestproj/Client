import * as React from 'react';

import {GlobalContext} from 'packages/contexts/GlobalContext';

const CheckToken: React.FC = () => {
    const { accessToken } = React.useContext(GlobalContext);

    React.useEffect(() => {
        console.log(!!accessToken)
        if(!accessToken) window.location.hash = '#/signin'
    }, [accessToken]);

    return <></>;
}

export default CheckToken;