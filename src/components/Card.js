import React from 'react';
import styles from '../css/card.module.css'

const Card = ({number, suit, name}) => {
    return (
        <div className={styles.container}>
            <div className={styles.img__container}>
                <h3 className={styles.card__title}>{name}</h3>
                <img src={suit} className={styles.img} alt="suit"/>
                <span className={styles.text}>{number}</span>
            </div>
        </div>
    );
};

export default Card;