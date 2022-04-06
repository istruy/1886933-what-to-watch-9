import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/films';

export const changeGenre = createAction<{ genre: string }>('filmslist/changeGenre');
export const getFilmsList = createAction<{ genre: string }>('filmsList/getFilmsList');
export const loadFilms = createAction<Film[]>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string>('filmsList/error');

