import './App.css'
import {AppShell} from "@mantine/core";
import {Body} from "./Components/Body/Body.tsx";

function App() {

    return (
        <AppShell>
            <AppShell.Main>
                <Body/>
            </AppShell.Main>
        </AppShell>
    )
}

export default App
