import { createSlice } from '@reduxjs/toolkit';
import { Genres, NameSpace } from '../../const';
import { FilmsListProcess } from '../../types/state';

const initialState: FilmsListProcess = {
  genre: Genres.AllGenres.toString(),
};

export const filmsProcess = createSlice({
  name: NameSpace.filmsList,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    },
  },
});

export const { changeGenre } = filmsProcess.actions;
