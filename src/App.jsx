// App.js
import React from 'react';
import { AppContextProvider } from './AppContext';
import AppRouter from './Router';

function App() {
  return (
    <AppContextProvider>
      <div>
        <h1>My App</h1>
        <AppRouter />
      </div>
    </AppContextProvider>
  );
}

export default App;
