import {Center, Image, Modal, Text} from "@mantine/core";
import {createPortal} from "react-dom";

type ModalWindowProp = {
    open: boolean;
    close: () => void;
    bigImage: string | null;
    missionName: string;
    rocketName: string;
    details: string;
}

export function ModalWindow({open, close, bigImage, details, rocketName, missionName}: ModalWindowProp) {
    const modalRoot = document.getElementById('portal-root')
    if (!modalRoot) return null;
    if (!open) {
        return null
    }
    else {
    return createPortal(
            <Modal opened={open} onClose={close} title={missionName} withinPortal={false} overlayProps={{blur: 3}} size={'xl'}>
                <Center mb={15}>
                    <Image src={bigImage} w={200} h={200}/>
                </Center>
                <Text>Mission name:</Text>
                <Text c={"gray"} mb={15}>{missionName}</Text>
                <Text>Rocket name:</Text>
                <Text c={"gray"} mb={15}>{rocketName}</Text>
                <Text>Details:</Text>
                <Text c={"gray"}>{details}</Text>
            </Modal>,
        modalRoot
        )
    }
}