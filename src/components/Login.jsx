import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useState } from 'react';

function Login() {
  const dispatch = useDispatch();
  const [userLoginInput, setUserLoginInput] = useState({ name: '', age: 0, email: ''})

  return (
    <div id='login'>
      <form>
        <input type="text" placeholder='name' onChange={e => setUserLoginInput({...userLoginInput, name: e.target.value})}/>
        <input type="text" placeholder='age' onChange={e => setUserLoginInput({...userLoginInput, age: Number(e.target.value)})}/>
        <input type="text" placeholder='email' onChange={e => setUserLoginInput({...userLoginInput, email: e.target.value})}/>
      </form>
      <button onClick={() => dispatch(login(userLoginInput)) }>Login</button>
      <button onClick={() => dispatch(logout()) }>Logout</button>
    </div>
  )
}

export default Login;