import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
try {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter basename=''>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (e) {
  console.log(e);
}
