import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('filmslist/changeGenre');
export const getFilmsList = createAction<string>('filmsList/getFilmsList');
