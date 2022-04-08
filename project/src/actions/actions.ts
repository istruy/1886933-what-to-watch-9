import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Film, Review } from '../types/films';

export const changeGenre = createAction<{ genre: string }>('filmslist/changeGenre');
export const getFilmsList = createAction<{ genre: string }>('filmsList/getFilmsList');
export const loadFilms = createAction<Film[]>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const loadComments = createAction<Review[]>('data/loadComments');
export const redirectToRoute = createAction<AppRoute>('filmsList/redirectToRoute');

