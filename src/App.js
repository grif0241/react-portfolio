import React, { useContext } from 'react';

import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import Container from './components/Container/Container';

function App() {

  return (
    <div className="App">
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </div>
  );
}

export default App;
