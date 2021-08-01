import { createSlice, configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme(state, action) {
      return state === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

const rootReducer = combineReducers({
  theme: themeSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
