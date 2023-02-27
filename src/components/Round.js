import React, {useEffect, useState} from 'react';
import {suit} from "../utils/constans";
import Card from "./Card";
import Modal from "./Modal";
import DrawResult from "./DrawResult";
import WinnerResult from "./WinnerResult";

const Round = ({setStatistics, players, statistics, setPlayers}) => {
    const [cardDeck, setCardDeck] = useState([null]);
    const [currentCard, setCurrentCard] = useState([]);
    const [resultOfRound, setResultOfRound] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [winnerInd, setWinnerInd] = useState();


    useEffect(() => {
        newRound()
    }, []);


    useEffect(() => {
        if (resultOfRound.length === 0) {
            takeCard();
        }
    }, [cardDeck])

    const newRound = () => {
        const newCardDeck = createCardDeck();
        const shuffleCardDeck = shuffleCards(newCardDeck);
        setCardDeck(shuffleCardDeck);
    }

    const createCardDeck = () => {
        const newCardDeck = [];
        for (let i = 0; i < suit.length; i++) {
            for (let j = 1; j < 14; j++) {
                const card = {suit: suit[i], number: j};
                newCardDeck.push(card);
            }
        }
        return newCardDeck;
    }

    const shuffleCards = (cardDeck) => {
        const shuffleCardDeck = [...cardDeck];
        for (let i = shuffleCardDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleCardDeck[i], shuffleCardDeck[j]] = [shuffleCardDeck[j], shuffleCardDeck[i]];
        }
        return shuffleCardDeck;
    };

    const takeCard = () => {
        if (cardDeck.length >= players.length) {
            const cards = [];
            const newCardDeck = [...cardDeck];
            const newResultOfRound = [...resultOfRound]

            for (let i = 0; i < players.length; i++) {
                const card = newCardDeck[newCardDeck.length - 1]
                cards.push(card);

                if (newResultOfRound.length === i) {
                    newResultOfRound[i] = card.number;
                } else {
                    let sum = newResultOfRound[i];
                    sum += card.number;
                    newResultOfRound[i] = sum;
                }
                newCardDeck.pop();
            }
            setCurrentCard(cards);
            setCardDeck(newCardDeck);
            setResultOfRound(newResultOfRound);
        }

        if (cardDeck.length === 0) {
            toggleModal();
            createStat();
        }
    }

    function createStat() {
        const newStat = [];
        players.map((p, i) => {
            const playerStat = {
                name: p,
                result: resultOfRound[i]
            }
            newStat.push(playerStat);
        })

        const gameStat = [...statistics];
        if (newStat[0].result > newStat[1].result) {
            gameStat[0].winner++;
            setWinnerInd(0);
        }
        if (newStat[0].result < newStat[1].result) {
            gameStat[1].winner++;
            setWinnerInd(1);
        }
        setStatistics(gameStat);
    }

    const toggleModal = (event) => {
        setShowModal(!showModal);
        if (showModal === true) {
            setResultOfRound([]);
            setCurrentCard([]);
            newRound();
        }
    };

    return (
        <div className="container container__relative">
            <button className="close-button" onClick={() => setPlayers([])}>X</button>
            <div className="cards">
                {players.map((item, index) => (
                    <React.Fragment key={index}>
                        {currentCard.length > 0 && (
                            <Card
                                name={item}
                                number={currentCard[index].number}
                                suit={currentCard[index].suit}
                                takeCard={takeCard}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>


            {showModal && (
                <Modal onClose={toggleModal} setPlayers={setPlayers}>
                    {resultOfRound[0] === resultOfRound[1] ?
                        <DrawResult statistics={statistics} resultOfRound={resultOfRound}/>
                        : <WinnerResult statistics={statistics} resultOfRound={resultOfRound} winnerInd={winnerInd}/>}
                </Modal>
            )}
            <button className="shine-button" onClick={takeCard}>Next</button>
        </div>
    )
}

export default Round;