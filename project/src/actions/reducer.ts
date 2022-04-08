import { AuthorizationStatus, Genres } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmsList, loadComments, loadFilms, requireAuthorization } from './actions';
import { Film, Review } from '../types/films';

type InitialState = {
  genre: string,
  movieList: Film[],
  allFilms: Film[],
  comments: Review[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

const initialState: InitialState = {
  genre: Genres.AllGenres.toString(),
  movieList: [],
  allFilms: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(getFilmsList, (state, action) => {
      const { genre } = action.payload;

      state.movieList = genre === Genres.AllGenres.toString()
        ? state.allFilms
        : state.allFilms.filter((film) => film.genre === genre);
    })
    .addCase(loadFilms, (state, action) => {
      state.allFilms = action.payload;
      state.movieList = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export { reducer };
