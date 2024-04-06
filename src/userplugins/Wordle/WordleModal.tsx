import { closeModal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, openModal } from "@utils/modal";
import { Button, Switch } from "@webpack/common";

export function WordleModal({ rootProps }: {rootProps: ModalProps;}) {
    console.log(rootProps);
    return (
        <ModalRoot {...rootProps}>
            <ModalHeader justify="center" className="">
                Title
            </ModalHeader>
            
            <Button>Button</Button>
        </ModalRoot>
    )
}
