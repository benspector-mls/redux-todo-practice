import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../features/theme';

function ChangeTheme() {

  const theme = useSelector(state => state.theme.value);
  const dispatch = useDispatch();
  const themeButtonText = theme === 'light' ? '🌞' : '🌑';

  return (
    <div>
      <button onClick={() => dispatch(toggle())}>{themeButtonText}</button>
    </div>
  )
}

export default ChangeTheme;