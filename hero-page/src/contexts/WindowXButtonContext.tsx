import { createContext } from 'react';

interface Context {
  renderWindow: boolean;
  setRenderWindow(show: boolean): void;
}

const WindowXButtonContext = createContext<Context>({
  renderWindow: false,
  setRenderWindow: () => { null },
});

export default WindowXButtonContext;