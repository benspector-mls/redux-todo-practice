import { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleCompleteTodo, removeTodo } from '../features/todos';

function Todos() {
  const [newTodoText, setNewTodoText] = useState('');
  const todos = useSelector(state => state.todos.value);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodoText));
  }

  return (
    <div> 
      <h1>Todos</h1>
      <form onSubmit={handleSubmit} id='todo-form'>
        <input type="text" name="new-todo" id="new-todo" placeholder='New Todo' onChange={e => setNewTodoText(e.target.value)}/>
        <input type="submit" value="+" />
      </form>
      <ul id='todos'>
        {
          todos.map(todo => <Todo key={todo.id} todo={todo}/> )
        }
      </ul>
    </div>
  )
}

function Todo({ todo }) {

  const dispatch = useDispatch();

  return (
    <li className={'todo-item'}>
      <div onClick={() => dispatch(toggleCompleteTodo(todo.id))} className={todo.isComplete ? 'complete' : ''}>{todo.text}</div>
      <div onClick={() => dispatch(removeTodo(todo.id))} className='delete-todo'>X</div>
    </li>
  )
}

export default Todos;