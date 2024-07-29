import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/Slices/themeSlice';
import Switch from '@mui/material/Switch';

function ThemeToggle() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    // <button onClick={handleToggle} className="p-2 rounded bg-gray-800 text-white">
    //   {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    // </button>
  <div>
    <div>
    <Switch {...label}  onClick={handleToggle} className="p-2 rounded  text-white" />
    {theme === 'light' ? 'Dark' : 'Light'}
    </div>
     
  </div>
   
  );
}

export default ThemeToggle;

