import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Make sure the element exists before trying to render
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  // Use a single, final render call
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/chemica/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
    console.error("Fatal: The root element with ID 'root' was not found in the HTML.");
}
