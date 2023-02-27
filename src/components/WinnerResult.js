import React from 'react';

const WinnerResult = ({resultOfRound, statistics, winnerInd}) => {
    return (
        <>
        <h3 className="subtitle">Congratulations we have a winner!</h3>
        <div className="container__res">
            <div className="box">
                <h4 className="subtitle">{statistics[winnerInd].name}</h4>
                <p>Winner</p>
                <p>{resultOfRound[winnerInd]}</p>
            </div>
            <div className="box">
                <h4 className="subtitle">{statistics[statistics.length-winnerInd-1].name}</h4>
                <p>Loser</p>
                <p>{resultOfRound[resultOfRound.length-winnerInd-1]}</p>
            </div>
        </div>
            <div className="general__container">
                <h4 className="title">General result</h4>
                <p>{statistics[winnerInd].winner} / {statistics[statistics.length-winnerInd-1].winner}</p>
            </div>
        </>
    );
};

export default WinnerResult;