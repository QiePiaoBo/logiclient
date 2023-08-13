import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { App } from './pages/App';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from '@nextui-org/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
reportWebVitals();
