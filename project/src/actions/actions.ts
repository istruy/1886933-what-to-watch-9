import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<{ genre: string }>('filmslist/changeGenre');
export const getFilmsList = createAction<{ genre: string }>('filmsList/getFilmsList');
