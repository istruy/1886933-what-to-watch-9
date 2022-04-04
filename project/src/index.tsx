import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from '../src/mocks/films';
import { review, comments } from '../src/mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';

const Setting = {
  films: films,
  reviews: review,
  comment: comments,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={Setting.films} reviews={Setting.reviews} comment={Setting.comment} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

