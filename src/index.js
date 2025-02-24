import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './db/dbConnection'
import App from './App';
import { FileContextProvider } from './contexts/FileContext'
import { AuthProvider } from '../src/contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <FileContextProvider>
      <App />
    </FileContextProvider>
  </AuthProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
