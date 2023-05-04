
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export default store;

