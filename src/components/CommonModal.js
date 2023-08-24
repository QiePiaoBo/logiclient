import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link } from "@nextui-org/react";

function CommonModal(props) {
    const { isOpen, onOpenChange } = props;
    console.log("isOpen=" + isOpen);
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">{props.title}</ModalHeader>
                <ModalBody>
                    <p>
                        {props.content}
                    </p>
                </ModalBody>
                <ModalFooter>
                    {/* <Button color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button> */}
                    {props.btnUrl1 && props.btnName1 &&
                        <Button href={props.btnUrl1} as={Link} color="primary" variant="solid">
                            {props.btnName1}
                        </Button>
                    }
                    {props.btnUrl2 && props.btnName2 &&
                        <Button href={props.btnUrl2} as={Link} color="primary" variant="solid">
                            {props.btnName2}
                        </Button>
                    }
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
export default CommonModal;