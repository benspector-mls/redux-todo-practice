import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user.js';
import themeReduer from './features/theme.js';
import todosReducer, { addTodo, removeTodo, toggleCompleteTodo } from './features/todos.js';
import { BrowserRouter } from 'react-router-dom';

const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
  matcher: isAnyOf(addTodo, removeTodo, toggleCompleteTodo),
  effect: async () => {
    localStorage.setItem('todos', JSON.stringify(store.getState().todos.value));
  },
})

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReduer,
    todos: todosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
