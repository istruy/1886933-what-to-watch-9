import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { AuthorizationStatus, AppRoute, Genres } from '../../const';
import App from './app';

const mockStore = configureMockStore();

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Unknown },
  DATA: {
    allFilms: [],
    comments: [],
    filmListByGenre: [],
    isDataLoaded: false
  },
  FILMS_LIST: {
    genre: Genres.AllGenres.toString()
  },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store} >
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </ Provider>
);

describe('Application Routing', () => {
  it('should render "Main Screen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render "Film Screen" when user navigate to "/film/:id"', () => {
    history.push('/films/2');

    render(fakeApp);

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Play/i)).toBeInTheDocument();
  });

  it('should render "Sign in Screen" when user navigate to "/login"', () => {
    history.push(AppRoute.SignIn);

    render(fakeApp);

    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('should render "Player Scren" when user navigate to "/player/:id"', () => {
    history.push('/player/2');

    render(fakeApp);

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });
});
