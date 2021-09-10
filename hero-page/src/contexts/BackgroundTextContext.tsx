import React, { createContext } from 'react';

interface bgCtxt {
  bgText: string;
  setBgText(txt: string): void;
}

const BackgroundTextContext = createContext<bgCtxt>({
  bgText: 'jackkufa',
  setBgText: () => { }
});

export default BackgroundTextContext;