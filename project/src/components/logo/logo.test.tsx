import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import Logo from './logo';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({});

describe('Component: Logo', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>

        <HistoryRouter history={history}>
          <Logo />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/W/i)).toBeInTheDocument();
    expect(screen.getByAltText(/T/i)).toBeInTheDocument();
    expect(screen.getByAltText(/W/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
