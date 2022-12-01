import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { AuthContext, AuthContextProvider } from './context/AuthContext.js';
import { SearchContextProvider } from './context/SearchContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
