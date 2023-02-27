import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import styles from '../css/modal.module.css'

const modalRoot = document.querySelector('#modal-root');

const Modal = ({children, onClose, setPlayers}) => {
    useEffect(() => {
        window.addEventListener('keyup', handleKeyDown);
    }, []);

    useEffect(() => {
        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        };
    });

    const handleKeyDown = event => {
        if (event.code === 'Escape') {
            onClose(event);
        }
    };

    const newGame = event => {
        onClose(event);
    }

    const exit = event => {
        setPlayers([]);
        onClose(event);
    }

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.image_modal}>{children}
                <button className="shine-button" onClick={newGame} >New game</button>
                <button className="shine-button" onClick={exit} >Exit</button>
            </div>
        </div>,
        modalRoot,
    );
}
export default Modal;