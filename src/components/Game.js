import React, {useEffect, useState} from 'react';
import Round from "./Round";

const Game = ({players, setPlayers}) => {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        const newStatistics = [];
        players.map(p => {
            const player = {
                name: p,
                winner: 0
            }
            newStatistics.push(player)
        })
        setStatistics(newStatistics);
    },[])


    return (
            <Round setStatistics={setStatistics}  statistics={statistics} setPlayers={setPlayers} players={players}/>
    );
};

export default Game;