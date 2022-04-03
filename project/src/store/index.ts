import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './../actions/reducer';

export const store = configureStore(
  { reducer }
);
