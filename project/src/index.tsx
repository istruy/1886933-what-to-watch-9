import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { comments } from '../src/mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const Setting = {
  comment: comments,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App comment={Setting.comment} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

