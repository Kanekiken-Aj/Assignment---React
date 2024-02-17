// TextComponent.js
import React, { useContext } from 'react';
import { StylingContext } from './StylingContext';

const TextComponent = () => {
  // Accessing values from the context
  const { textColor, fontFamily } = useContext(StylingContext);

  return (
    <div style={{ color: textColor, fontFamily: fontFamily }}>
      <p>This is a sample text styled using Context API.</p>
    </div>
  );
};

export default TextComponent;
