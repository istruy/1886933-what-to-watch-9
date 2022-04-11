import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import SignOut from './sign-out';

const history = createMemoryHistory();
history.push('/sign-out');

describe('Component: Sign out screen', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <SignOut />
      </HistoryRouter>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
