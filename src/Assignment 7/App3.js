// App.js
import React from 'react';
import { UserProvider } from './contexts/UserContext';
import UserProfile from './components/UserProfile';

const App3 = () => {
  return (
    <UserProvider>
      <div>
        <h1>App - It Uses Context API </h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
};

export default App3;
