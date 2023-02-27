import './App.css';
import {useState} from 'react';
import Game from "./components/Game";
import Form from "./components/Form";

const App = () => {
    const [players, setPlayers] = useState(["COMPUTER"]);

    return (
        players.length > 1 ? <Game players={players} setPlayers={setPlayers}/> :
            <Form setPlayers={setPlayers} players={players}/>
    );
}

export default App;
