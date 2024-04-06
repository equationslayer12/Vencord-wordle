import { closeModal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, openModal } from "@utils/modal";

export function WordleModal({ rootProps }: {rootProps: ModalProps;}) {
    return (
        <ModalRoot {...rootProps}>
            <h1>Hellooo</h1>
        </ModalRoot>
    )
}
