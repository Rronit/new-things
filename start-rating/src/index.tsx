import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
const rootElement = document.getElementById('root');
let root:any = '';
if (rootElement) {
   root = ReactDOM.createRoot(rootElement); // For React 18
  root.render(<App />);
} else {
  console.error("Root element not found");
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
