import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data';
import { filmsProcess } from './films-list-process/films-list-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: filmsData.reducer,
  [NameSpace.filmsList]: filmsProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});
