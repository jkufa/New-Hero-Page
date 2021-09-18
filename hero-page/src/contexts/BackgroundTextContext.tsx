import React, { createContext } from 'react';

interface bgCtxt {
  fade: boolean;
  setFade(b: boolean): void;
  bgText: string;
  setBgText(txt: string): void;
}

const BackgroundTextContext = createContext<bgCtxt>({
  fade: true,
  bgText: 'jackkufa',
  setBgText: () => { },
  setFade: () => { },
});

export default BackgroundTextContext;