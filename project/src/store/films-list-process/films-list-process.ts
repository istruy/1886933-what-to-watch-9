import { createSlice } from '@reduxjs/toolkit';
import { Genres, NameSpace } from '../../const';
import { FilmsListProcess } from '../../types/state';

const initialState: FilmsListProcess = {
  genre: Genres.AllGenres.toString(),
  countFilmCards: 8,
};

export const filmsProcess = createSlice({
  name: NameSpace.FilmsList,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
      state.countFilmCards = 8;
    },
    changeCountFilmCards: (state) => {
      state.countFilmCards += 8;
    },
    resetFilmCards: (state) => {
      state.countFilmCards = 8;
    },
  },
});

export const { changeGenre, changeCountFilmCards, resetFilmCards } = filmsProcess.actions;
