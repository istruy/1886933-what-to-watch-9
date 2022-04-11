import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import NotFoundScreen from './not-found-screen';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({});

history.push('/not-found');

describe('Component: Send review screen', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NotFoundScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });
});
