import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { Film, Review } from './films.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type FilmsData = {
  allFilms: Film[],
  isDataLoaded: boolean,
  comments: Review[],
  filmListByGenre: Film[],
  isCommentPosted: boolean,
}

export type FilmsListProcess = {
  genre: string,
  countFilmCards: number;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
}
