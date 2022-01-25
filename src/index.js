import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { GameProvider } from './components/state/GameProvider';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router>
    <GameProvider>
      <App />
    </GameProvider>
  </Router>,
  document.getElementById('root')
);
