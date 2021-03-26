export interface ModalProps {
    title: string;
    content: string;
    setModalState: (modalState: boolean) => void;
    setIsAccepted: (isAppected: boolean) => void;
}