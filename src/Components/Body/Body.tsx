import {useEffect, useReducer} from "react";
import ky from "ky";
import {BodyCard} from "./BodyCard/BodyCard.tsx";
import {Center, Flex} from "@mantine/core";

type Launch = {
    mission_name: string;
    links: {
        mission_patch_small: string | null;
        mission_patch: string | null;
    };
    rocket: {
        rocket_name: string;
    };
    details: string | null;
};
type Action =
    | { type: 'get_launches'; payload: Launch[]};

function reducer(state: Launch[], action: Action): Launch[] {
    switch (action.type) {
        case 'get_launches': {
            return action.payload;
        }
        default:
            return state;
    }
}

export function Body() {
    const [state, dispatch] = useReducer(reducer, [] as Launch[]);
    useEffect((() => {
        ky.get('https://api.spacexdata.com/v3/launches', {
            searchParams: {
                launch_year: '2020',
            },
        })
            .json<Launch[]>()
            .then(data => {
                dispatch({type: 'get_launches', payload: data})
            })
    }), [])
    return <>
        <Center>
        <h1>SpaceX launches 2020</h1>
        </Center>
        <Flex
            direction="row"
            wrap="wrap"
            gap="md"
            h={'100vh'}
            justify={'center'}
            align={'center'}
        >
            {state.map((launch) => (
                <BodyCard
                    key={launch.mission_name}
                    littleImage={launch.links?.mission_patch_small || ''}
                    missionName={launch.mission_name}
                    rocketName={launch.rocket?.rocket_name}
                    bigImage={launch.links?.mission_patch}
                    details={launch.details}
                />
            ))}
        </Flex>
    </>
}
