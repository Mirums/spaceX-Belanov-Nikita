import {Card, Flex, Image, Text} from "@mantine/core";
import {SeeMoreButton} from "../../Buttons/SeeMoreButton.tsx";

type BodyCardProps = {
    image: string | null;
    missionName: string;
    rocketName: string;
}

export function BodyCard({image, missionName, rocketName}: BodyCardProps) {
    return <>
        <Card w={200} shadow="sm" padding="md" radius="md" withBorder>
            <Flex direction={'column'} align={'center'}>
                <Image w={90} h={90} src={image} mb={20} mt={15}/>
                <Text lineClamp={1} mb={10} fw={600}>{missionName}</Text>
                <Text c={'gray'} mb={35}>{rocketName}</Text>
                <SeeMoreButton/>
            </Flex>
        </Card>
    </>
}