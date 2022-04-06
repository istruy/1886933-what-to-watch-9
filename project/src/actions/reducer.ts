import { AuthorizationStatus, Genres } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmsList, loadFilms, requireAuthorization, setError } from './actions';
// import { films as filmsItems } from '../mocks/films';
import { Film } from '../types/films';

type initialState = {
  genre: string,
  movieList: Film[],
  allFilms: Film[],
  authorizationStatus: AuthorizationStatus,
  error: string,
  isDataLoaded: boolean,
};

const initialState: initialState = {
  genre: Genres.AllGenres.toString(),
  movieList: [],
  allFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
