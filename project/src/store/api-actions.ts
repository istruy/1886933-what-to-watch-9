import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film, Review } from '../types/films';
import { redirectToRoute } from '../actions/actions';
import { requireAuthorization } from '../store/user-process/user-process';
import { loadComments, loadFilms } from './films-data/films-data';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { errorHandle } from '../services/error-handle';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { AuthData } from '../types/auth-data';
import { Comment } from '../types/films';

export const fetchCommentsAction = (filmId: string) => createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}${filmId}`);
      dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
)();

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Film[]>(APIRoute.Films);
      dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const postReview = (filmId: string, { comment, rating }: Comment) => createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postReview',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.post<UserData>(`${APIRoute.Comments}${filmId}`, { comment, rating });
      dispatch(loadComments(filmId));
      dispatch(redirectToRoute(`${AppRoute.OnlyFilm}${filmId}`));
    } catch (error) {
      errorHandle(error);
    }
  },
)();

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
    }
  },
);
