import React, { useContext } from 'react';
import WindowXButtonContext from '../../../contexts/WindowXButtonContext';
import styles from './XButton.module.scss';

const XButton = () => {
  const { renderWindow, setRenderWindow } = useContext(WindowXButtonContext);

  return (
    <button 
      className={`${styles.btn}`}
      onClick={ () => {
        setTimeout(() => {
          setRenderWindow(false);
        }, 10);
      }}
      >
      X
      </button>
  );
}

export default XButton;