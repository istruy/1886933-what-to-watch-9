import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import SignInScreen from './sign-in-screen';
import { AppRoute } from '../../const';

const history = createMemoryHistory();
history.push(AppRoute.SignIn);

describe('Component: Sign in screen', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <SignInScreen />
      </HistoryRouter>
    );

    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Email address/i)).toBeInTheDocument();

  });
});
