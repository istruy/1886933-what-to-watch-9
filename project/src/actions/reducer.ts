import { Genres } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmsList } from './actions';
import { films } from '../mocks/films';

const initialState = {
  genre: Genres.AllGenres.toString(),
  movieList: films,
  allFilms: films,
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
        ? films
        : films.filter((film) => film.genre === genre);
    });
});

export { reducer };
