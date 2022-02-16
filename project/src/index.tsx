import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  filmCount: 20,
  genreFilm: 'Drama',
  releaseYearFilm: 2014,
  nameFilm: 'The Grand Budapest Hotel',
};

ReactDOM.render(
  <React.StrictMode>
    <App filmCount={Setting.filmCount} genreFilm={Setting.genreFilm} releaseYearFilm={Setting.releaseYearFilm} nameFilm={Setting.nameFilm} />
  </React.StrictMode>,
  document.getElementById('root'));
