import * as React from 'react';

import Modal from 'domains/Common/components/Modal';

interface Props {
    setModalState: (modalState: boolean) => void;
    setIsAccepted: (isAppected: boolean) => void;
}

const ScrapDeleteModal: React.FC<Props> = ({
    setIsAccepted,
    setModalState
}) => {

    return <Modal 
        // setIsAccepted={setIsAccepted}
        // title="DELETE"
        // content="해당 스크랩을 삭제하시겠습니까?"
        // setModalState={setModalState}
        />;
}

export default ScrapDeleteModal;