import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import SendReviewScreen from './send-review-screen';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';


const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({});

history.push('/films/:id/review');

describe('Component: Send review screen', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SendReviewScreen onSendMessage={jest.fn()} />
        </HistoryRouter>
      </Provider>

    );

    expect(screen.getByText(/Rating 9/i)).toBeInTheDocument();
  });
});
