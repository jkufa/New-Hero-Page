import React, { FC, useState } from "react";
import WindowXButtonContext from "../../contexts/WindowXButtonContext";
import Button from "./button/Button";
import Window from "./window/Window";
import styles from './ButtonWindow.module.scss';

interface Props {
  title: string;
  defaultBg: string; // set background to this string when button not hovered or clicked
  content?: FC;
}


const ButtonWindow: FC<Props> = (Props,...children) => {
  // States for managing window
  const [renderWindow, setRenderWindow] = useState<boolean>(false);
  const value = { renderWindow, setRenderWindow};

  return (
    <WindowXButtonContext.Provider value={ value }>
      <div className={`${styles.btn_wndw_container}`}>
          {renderWindow ? <Window title={ Props.title.toUpperCase() }></Window> : <Button title={ Props.title } defaultBg = { Props.defaultBg } ></Button> }
        </div>
    </WindowXButtonContext.Provider>
  );
}

export default ButtonWindow;