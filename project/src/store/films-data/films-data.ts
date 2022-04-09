import { createSlice } from '@reduxjs/toolkit';
import { Genres, NameSpace } from '../../const';
import { FilmsData } from '../../types/state';

const initialState: FilmsData = {
  allFilms: [],
  comments: [],
  movieList: [],
  isDataLoaded: false,
};

export const filmsData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.allFilms = action.payload;
      state.movieList = action.payload;
      state.isDataLoaded = true;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
    getFilmsList: (state, action) => {
      const { genre } = action.payload;

      state.movieList = genre === Genres.AllGenres.toString()
        ? state.allFilms
        : state.allFilms.filter((film) => film.genre === genre);
    },
  },
});

export const { loadComments, loadFilms, getFilmsList } = filmsData.actions;

