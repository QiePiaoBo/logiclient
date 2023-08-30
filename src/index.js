import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { App } from './pages/App';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from '@material-tailwind/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <NextUIProvider>
      <App />
    </NextUIProvider>

  </ThemeProvider>
);
reportWebVitals();
