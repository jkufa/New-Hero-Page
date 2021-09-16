import React, { FC, useContext, useState } from "react";
import BackgroundContext from '../../contexts/BackgroundTextContext';
import WindowXButtonContext from "../../contexts/WindowXButtonContext";
import XButton from "../x-button/XButton";
import styles from './ButtonWindow.module.scss';

interface Props {
  title: string;
  defaultBg: string; // set background to this string when button not hovered or clicked
  content?: FC;
}


const ButtonWindow: FC<Props> = (Props,...children) => {
  const { setFade, setBgText } = useContext(BackgroundContext);
  
  // States for managing window
  const [renderWindow, setRenderWindow] = useState<boolean>(false);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const value = { renderWindow, setRenderWindow};

  // console.log(Props.title,renderWindow);

  return (
    <WindowXButtonContext.Provider value={ value }>
      <div className={`${styles.btn_wndw_container}`}>
          <button 
            type="button" 
            className={`${ renderWindow ? styles.wndw : styles.btn} `}
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
            { renderWindow && 
              <XButton></XButton> 
            }
            { renderWindow ? Props.content : '' }
          </button> 
      </div>
    </WindowXButtonContext.Provider>
  );
}

export default ButtonWindow;