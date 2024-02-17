// App.js
import React from 'react';
import TextComponent from './TextComponent';
import { StylingProvider } from './StylingContext';

const App1 = () => {
  return (
    <StylingProvider>
      <div className="App">
        <h1>Styling with Context API</h1>
        <TextComponent />
      </div>
    </StylingProvider>
  );
};

export default App1;
