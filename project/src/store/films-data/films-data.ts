import { createSlice } from '@reduxjs/toolkit';
import { Genres, NameSpace } from '../../const';
import { FilmsData } from '../../types/state';

const initialState: FilmsData = {
  allFilms: [],
  comments: [],
  filmListByGenre: [],
  isDataLoaded: false,
  isCommentPosted: false,
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.allFilms = action.payload;
      state.filmListByGenre = action.payload;
      state.isDataLoaded = true;
    },
    loadComments: (state, action) => {
      state.isCommentPosted = false;
      state.comments = action.payload;
    },
    getFilmsList: (state, action) => {
      const { genre } = action.payload;

      state.filmListByGenre = genre === Genres.AllGenres.toString()
        ? state.allFilms
        : state.allFilms.filter((film) => film.genre === genre);
    },
    setCommentsPosted: (state) => {
      state.isCommentPosted = true;
    },
  },
});

export const { loadComments, loadFilms, getFilmsList, setCommentsPosted } = filmsData.actions;

