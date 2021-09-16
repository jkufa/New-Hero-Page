import { FC, useContext, useState } from 'react';
import WindowXButtonContext from '../../contexts/WindowXButtonContext';
import styles from './Window.module.scss';

interface Props {
  title: string;
}

const Window: FC<Props> = (Props) => {
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [zIndex, setZIndex] = useState<number>(5);

  const { setRenderWindow } = useContext(WindowXButtonContext);
  const [fadeOut, setFadeOut] = useState<boolean>(false)

  const genRandomLeftTop = () => {
    let top = Math.random() * 90;
    let left = Math.random() * 90;
    console.log(top,left);
    return {top: top + '%', left: left + '%', zIndex: zIndex}
  }
  const [posStyles, setStyles] = useState<{}>(genRandomLeftTop);


  const dragStart = (event: React.MouseEvent<HTMLElement>) => {
    let diffX:number = event.screenX - event.currentTarget.getBoundingClientRect().left;
    let diffY:number = event.screenY - event.currentTarget.getBoundingClientRect().top;
    console.log('dragStart',zIndex);
    setPositionX(diffX);
    setPositionY(diffY);
    setDragging(true);
  }

  const drag = (event: React.MouseEvent<HTMLElement>) => {
    if (dragging) {
      let left = event.screenX - positionX;
      let top = event.screenY - positionY;
      console.log('drag',zIndex);
      setStyles({
          left: left,
          top: top,
          // zIndex: zIndex,
      })
    }
  }

  const dragEnd = (event: React.MouseEvent<HTMLElement>) => {
    // setZIndex(zIndex-1);
    console.log('dragEnd',zIndex);
    setDragging(false);
    setStyles({
      top: event.screenY - positionY,
      left: event.screenX - positionX,
      // zIndex: zIndex,
  })
  }


  return (
    <div className={`${styles.window_container} ${fadeOut ? styles.fadeOut: ''}`}
      style={ posStyles }
      onMouseDown={ dragStart } 
      onMouseMove={ drag }
      onMouseUp={ dragEnd }
      >
      <div 
      className={`${styles.window_main}`}
      >
        <div className={`${styles.row}`}>
        <h2>{ Props.title }</h2>
        {/* BUTTON */}
        <div className={`${styles.xbtn_container}`}>
        <button 
          className={`${styles.btn}`}
          onClick={ () => {
            setFadeOut(true);
            setTimeout(() => {
              setRenderWindow(false);
            }, 250);
          }}
          >
          X
          </button>
        </div>
        </div>
        <div className={`${styles.col}`}>
        <p>
          YOOOO 
          YOOOO 
          YOOOO 
          YOOOO 
          YOOOO 
          YOOOO 
        </p>
        </div>
      </div>
    </div>
    );
}

export default Window;