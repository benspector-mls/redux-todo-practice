import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user.js';
import themeReduer from './features/theme.js';
import todosReducer from './features/todos.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReduer,
    todos: todosReducer
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
