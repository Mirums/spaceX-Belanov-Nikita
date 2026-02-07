import {render, screen} from '@testing-library/react'
import {MantineProvider} from '@mantine/core'
import App from "../App.tsx";
import ky from 'ky';
import {test, expect, vi, beforeEach} from "vitest";
import {Body} from "../Components/Body/Body.tsx";

vi.mock('ky')
const mockLaunches = [
    {
        mission_name: 'Test mission',
        links: {
            mission_patch_small: 'img.png',
            mission_patch: 'img_big.png',
        },
        rocket: {
            rocket_name: 'Falcon 9',
        },
        details: 'Test details',
    },
]
beforeEach(() => {
    ;(ky.get as any).mockReturnValue({
        json: async () => mockLaunches,
    })
})
test('renders App', () => {
    render(
        <MantineProvider>
            <App/>
        </MantineProvider>)
    expect(screen.getByText('SpaceX launches 2020')).toBeInTheDocument()
})
test('renders card', async () => {

    render(
        <MantineProvider>
            <Body/>
        </MantineProvider>
    )
    const mission = await screen.findByText('Test mission')
    expect(mission).toBeInTheDocument();
})