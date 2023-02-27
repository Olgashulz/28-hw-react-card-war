import React from 'react';

const DrawResult = ({resultOfRound, statistics}) => {
    return (
        <div>
            <h3 className="subtitle">The game ended in a draw!</h3>
            <div className="container__res">
                <div className="box">
                    <h4 className="subtitle">{statistics[0].name}</h4>
                    <p>{resultOfRound[0]}</p>
                </div>
                <div className="box">
                    <h4 className="subtitle">{statistics[1].name}</h4>
                    <p>{resultOfRound[1]}</p>
                </div>
            </div>
            <div className="general__container">
                <h4 className="title">General result</h4>
                <p>{statistics[0].winner} / {statistics[1].winner}</p>
            </div>

        </div>
    );
};

export default DrawResult;