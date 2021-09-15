import { FC, useContext, useState } from 'react';
import BackgroundContext from '../../contexts/BackgroundTextContext';
import styles from './Button.module.scss';
import Window from '../window/Window';
import WindowXButtonContext from '../../contexts/WindowXButtonContext';

interface Props {
  text: string;
  defaultBg: string;
  // showWindow: boolean;
}

const Button: FC<Props> = (Props) => {
  const { setFade, setBgText } = useContext(BackgroundContext);
  const [showWindow, toggleWindow] = useState<boolean>(false);
  const value = {showWindow, toggleWindow};

  if(showWindow) {
    return (
     <WindowXButtonContext.Provider value={ value } >
        <Window title={ Props.text.toUpperCase() }></Window>
     </WindowXButtonContext.Provider>
    ) 
  }
  else {
  return (
    <WindowXButtonContext.Provider value={ value } >
      <div className={`${styles.btn_container}`}>
        <button 
          type="button" 
          className={`${styles.btn}`}
          onFocusCapture = { () => { 
            setFade(true);
            setBgText(Props.text);
          }}
          onMouseEnter = { () => { 
            setFade(true);
            setBgText(Props.text);
          }}
          onTouchStartCapture = { () => { 
            setFade(true);
            setBgText(Props.text);
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
            toggleWindow(true);
          }}
          >
          { Props.text.toUpperCase() }
        </button> 
    </div>
  </WindowXButtonContext.Provider>
  );
  }
}

export default Button;