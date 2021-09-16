import React, { FC, useCallback, useContext, useRef, useState } from "react";
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
  const value = { renderWindow, setRenderWindow};


  const [position, setPosition] = useState({x: 0, y: 0});
  const elementRef = useRef<HTMLDivElement>(null);

  const onMouseDown = useCallback(
    (event) => {
      const onMouseMove = (event: MouseEvent) => {
        position.x += event.movementX;
        position.y += event.movementY;
        const element = elementRef.current;
        if (element) {
          element.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
        else { console.log(renderWindow)}
        setPosition(position);
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [position, setPosition, elementRef]
  );

  return (
    <WindowXButtonContext.Provider value={ value }>
      <div className={`${styles.btn_wndw_container}`}>
        <div 
            className={`${renderWindow ? styles.drag : ''}`}
            ref= { elementRef }
            onMouseDown={ onMouseDown } 
        >
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
      </div>
    </WindowXButtonContext.Provider>
  );
}

export default ButtonWindow;