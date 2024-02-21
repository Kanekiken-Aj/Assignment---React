// StylingContext.js
import React, { createContext, useState } from 'react';

// Create a context for styling
export const StylingContext = createContext();

// Create a provider component
export const StylingProvider = ({ children }) => {
  const [textColor, setTextColor] = useState('black');
  const [fontFamily, setFontFamily] = useState('Arial');

  return (
    <StylingContext.Provider value={{ textColor, setTextColor, fontFamily, setFontFamily }}>
      {children}
    </StylingContext.Provider>
  );
};
