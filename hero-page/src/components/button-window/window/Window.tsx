import { FC, useCallback,  useRef, useState } from 'react';
import XButton from '../x-button/XButton';
import styles from './Window.module.scss';

interface Props {
  title: string;
}

const Window: FC<Props> = (Props) => {

  const [position, setPosition] = useState({x: 0, y: 0});
  const [grow, setGrow] = useState<boolean>(true);
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
    <div 
    className={styles.drag}
    ref= { elementRef }
    onMouseDown={ onMouseDown } 
    >
      <div className={`${styles.window} ${grow ? styles.grow : ''} `}
           onAnimationEnd={() => setGrow(() => false)}
           >
        <div className={styles.header}>
          <div className={styles.title}>{Props.title}</div>
          <XButton></XButton>
        </div>
        <div className={styles.content_container}>{ Props.children }</div>
      </div>
    </div>
    );
}

export default Window;