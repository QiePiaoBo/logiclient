import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'tailwindcss/tailwind.css';
import { App } from './pages/App';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from '@nextui-org/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <main className="light text-foreground bg-background">
      <App />
    </main>
  </NextUIProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
