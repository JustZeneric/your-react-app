// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the Redux store using the reducers from './reducers'
const store = createStore(reducers);

// Render the application to the DOM
ReactDOM.render(
  // Wrap the entire app with the Redux Provider, providing access to the store
  // This allows all components in the app to access the Redux store
  <React.StrictMode>
    <Provider store={store}>
      {/* Render the main App component */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') // Mount the app inside the HTML element with ID 'root'
);

// Report Web Vitals for performance monitoring (optional)
reportWebVitals();
