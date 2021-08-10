import { createSlice, configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Redux Reducers

// Theme Redux State

// Function below searches the storage
// and gets theme if exist. Else returns
// light theme like a default state.
const getFromStorage = () => {
  const storageTheme = localStorage.getItem('theme');

  if (storageTheme === 'light') return 'light';
  else if (storageTheme === 'dark') return 'dark';
  else return 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getFromStorage(),
  reducers: {
    toggleTheme(state, action) {
      const newTheme = state === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    }
  }
});

// Reducers actions
export const { toggleTheme } = themeSlice.actions;

// Store configuration lines
// Why combineReducer? For RootState type.
const rootReducer = combineReducers({
  theme: themeSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

// This type below is required in useSelector hook
// because TypeScript can't find definitions of
// store reducers.
export type RootState = ReturnType<typeof rootReducer>;
