import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { checkAuthAction, fetchCommentsAction, fetchFilmsAction, loginAction, logoutAction } from './api-actions';
import { requireAuthorization } from './user-process/user-process';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { makeFakeComment, makeFakeFilm } from '../utils/mocks';
import { loadComments, loadFilms } from './films-data/films-data';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = { login: 'test@test.com', password: 'qwerty' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'testtoken' });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('what-to-watch-token', 'testtoken');
  });

  it('should dispatch loadFilms when GET /films', async () => {

    const fakeFilm = [makeFakeFilm()];

    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, fakeFilm);

    const store = mockStore();

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadFilms.toString());
  });

  it('should dispatch loadComments when GET /comments', async () => {
    const fakeComments = [makeFakeComment()];

    mockAPI
      .onGet(`${APIRoute.Comments}${2}`)
      .reply(200, fakeComments);

    const store = mockStore();

    await store.dispatch(fetchCommentsAction('2'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadComments.toString());
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('what-to-watch-token');
  });
});

