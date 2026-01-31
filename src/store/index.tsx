import { createStore } from 'redux';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
