import {Button, Card, Flex, Image, Text} from "@mantine/core";
import {ModalWindow} from "../../ModalWindow/ModalWindow.tsx";
import {useReducer} from "react";

type BodyCardProps = {
    littleImage: string | null;
    bigImage: string | null;
    missionName: string;
    rocketName: string;
    details: string | null;
}
type Action =
    | { type: 'open_modal'}
    | { type: 'close_modal'}
function reducer(state: boolean, action: Action): boolean {
    switch (action.type) {
        case 'open_modal': {
            return state = true;
        }
        case 'close_modal': {
            return state = false;
        }
        default:
            return state;
    }

}

export function BodyCard({littleImage, missionName, rocketName, bigImage, details}: BodyCardProps) {
    const [state, dispatch] = useReducer(reducer, false)

    return <>
        <Card w={200} shadow="sm" padding="md" radius="md" withBorder>
            <Flex direction={'column'} align={'center'}>
                <Image w={90} h={90} src={littleImage} mb={20} mt={15}/>
                <Text lineClamp={1} mb={10} fw={600}>{missionName}</Text>
                <Text c={'gray'} mb={35}>{rocketName}</Text>
                <Button fullWidth radius={10} onClick={() => dispatch({type: 'open_modal'})}>See more</Button>
                <ModalWindow open={state}
                             close={() => dispatch({type: 'close_modal'})}
                             bigImage={bigImage}
                             details={details}
                             missionName={missionName}
                             rocketName={rocketName}
                />
            </Flex>
        </Card>

    </>
}