import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from '../src/mocks/films';
import { review, comments } from '../src/mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';

const Setting = {
  film: films[0],
  films: films,
  reviews: review,
  comment: comments,
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App film={Setting.film} films={Setting.films} reviews={Setting.reviews} comment={Setting.comment} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));

