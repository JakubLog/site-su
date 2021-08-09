import { createSlice, configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Redux Reducers
const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme(state, action) {
      return state === 'light' ? 'dark' : 'light';
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
