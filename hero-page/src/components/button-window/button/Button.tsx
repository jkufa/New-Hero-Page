import { FC, useContext, useState } from 'react';
import styles from './Button.module.scss';
import Window from '../window/Window';
import WindowXButtonContext from '../../../contexts/WindowXButtonContext';
import BackgroundTextContext from '../../../contexts/BackgroundTextContext';

interface Props {
  title: string;
  defaultBg: string; // set background to this string when button not hovered or clicked
}

const Button: FC<Props> = (Props) => {
  const { setFade, setBgText } = useContext(BackgroundTextContext);
  const { setRenderWindow } = useContext(WindowXButtonContext);

  return (
  <button
    type="button" 
    className={`${ styles.btn} `}
    onFocusCapture = { () => { 
      setFade(true);
      setBgText(Props.title);
    }}
    onMouseEnter = { () => { 
      setFade(true);
      setBgText(Props.title);
    }}
    onTouchStartCapture = { () => { 
      setFade(true);
      setBgText(Props.title);
    }}
    onMouseLeave = { () => { 
        setFade(true);
        setBgText(Props.defaultBg);
    }}
    onTouchEndCapture={ () => {
      setFade(true);
      setBgText(Props.defaultBg);
    }}
    onClick={ () => {
      setRenderWindow(true);
    }}
    >
    { Props.title.toUpperCase() }
    </button>
    )
}

export default Button;