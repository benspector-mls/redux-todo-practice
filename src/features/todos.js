import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = JSON.parse(localStorage.getItem('todos')) || [];
let todoID = initialStateValue.reduce((maxId, current) => (maxId > current.id) ? maxId : current.id, 0) + 1

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: initialStateValue
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({ text: action.payload, id: todoID++, isComplete: false })
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload)
    },
    toggleCompleteTodo: (state, action) => {
      state.value.forEach(item => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      })
    },
  }
});

export const { addTodo, removeTodo, toggleCompleteTodo } = todosSlice.actions;

export default todosSlice.reducer;