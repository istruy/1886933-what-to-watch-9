import { Genres } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmsList } from './actions';
import { films } from '../mocks/films';

const initialState = {
  genre: Genres.All_Genres.toString(),
  movieList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsList, (state, action) => {
      state.movieList = action.payload === Genres.All_Genres.toString()
        ? films
        : films.filter((film) => film.genre === action.payload);
    });
});

export { reducer };
