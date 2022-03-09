import React, { FC, useContext } from 'react';
import WindowXButtonContext from '../../../contexts/WindowXButtonContext';
import BackgroundTextContext from '../../../contexts/BackgroundTextContext';
import styles from './XButton.module.scss';

interface Props {
  isMac: boolean;
}

const XButton: FC<Props> = (Props) => {
  const { setRenderWindow } = useContext(WindowXButtonContext);
  const { setFade, setBgText } = useContext(BackgroundTextContext);

  return (
    <button 
      className={`
                  ${styles.btn}
                  ${Props.isMac ? styles.isMac : ''}
                `}
      onClick={ () => {
        setTimeout(() => {
          setFade(true);
          setBgText("jackkufa");
          setRenderWindow(false);
        }, 10);
      }}
      >
      X
      </button>
  );
}

export default XButton;