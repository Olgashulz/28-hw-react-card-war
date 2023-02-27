import React, {useState} from 'react';

const Form = ({setPlayers, players}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setPlayers([...players, inputValue.toUpperCase().trim()]);
        setInputValue("");
    };

    const handleChange = (event) => {
        setInputValue(event.currentTarget.value);
    };

    return (
        <div className="container">
            <h2 className="title">Ready for WAR</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="submit" className="shine-button">Start Game</button>
            </form>
        </div>
    );
};

export default Form;