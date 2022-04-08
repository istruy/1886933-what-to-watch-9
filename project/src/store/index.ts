import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { reducer } from './../actions/reducer';
import { redirect } from './middlewares/routes';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

