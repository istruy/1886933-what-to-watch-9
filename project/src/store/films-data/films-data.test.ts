import { filmsData } from './films-data';
import { loadFilms, loadComments, getFilmsList } from './films-data';
import { makeFakeComment, makeFakeFilm } from '../../utils/mocks';

const fakeFilm = [makeFakeFilm()];
const fakeComments = [makeFakeComment()];

describe('Reducer: filmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        allFilms: [],
        comments: [],
        filmListByGenre: [],
        isDataLoaded: false,
        isCommentPosted: false
      });
  });

  it('should load films by given data', () => {
    const state = {
      allFilms: [],
      comments: [],
      filmListByGenre: [],
      isDataLoaded: false,
      isCommentPosted: false
    };
    expect(filmsData.reducer(state, loadFilms(fakeFilm)))
      .toEqual({
        allFilms: fakeFilm,
        comments: [],
        filmListByGenre: fakeFilm,
        isDataLoaded: true,
        isCommentPosted: false,
      });
  });

  it('should load comments by given data', () => {
    const state = {
      allFilms: [],
      comments: [],
      filmListByGenre: [],
      isDataLoaded: false,
      isCommentPosted: false,
    };
    expect(filmsData.reducer(state, loadComments(fakeComments)))
      .toEqual({
        allFilms: [],
        comments: fakeComments,
        filmListByGenre: [],
        isDataLoaded: false,
        isCommentPosted: false,
      });
  });

  it('should get all films from store by genre', () => {
    const state = {
      allFilms: fakeFilm,
      comments: [],
      filmListByGenre: [],
      isDataLoaded: false,
      isCommentPosted: false,
    };
    const genreOne = 'Action';

    expect(filmsData.reducer(state, getFilmsList(genreOne)))
      .toEqual({
        allFilms: fakeFilm,
        comments: [],
        filmListByGenre: fakeFilm,
        isDataLoaded: false,
        isCommentPosted: false,
      });
  });

  it('should get nothing by genre', () => {
    const state = {
      allFilms: fakeFilm,
      comments: [],
      filmListByGenre: [],
      isDataLoaded: false,
      isCommentPosted: false,
    };
    const genreSecond = 'Drama';

    expect(filmsData.reducer(state, getFilmsList(genreSecond)))
      .toEqual({
        allFilms: fakeFilm,
        comments: [],
        filmListByGenre: [],
        isDataLoaded: false,
      });
  });
});
