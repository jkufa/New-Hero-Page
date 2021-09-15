import React, { createContext } from 'react';

interface Context {
  showWindow: boolean;
  toggleWindow(show: boolean): void;
}

const WindowXButtonContext = createContext<Context>({
  showWindow: false,
  toggleWindow: () => {},
});

export default WindowXButtonContext;