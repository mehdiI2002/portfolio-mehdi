import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from './Routing/Routing.js';
import Background from './Background/Background.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background />
    <Routing />
  </React.StrictMode>
);

