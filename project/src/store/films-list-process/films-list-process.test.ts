import { Genres } from '../../const';
import { changeGenre, filmsProcess } from './films-list-process';

describe('Reducer: filmsListProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        genre: Genres.AllGenres.toString()
      });
  });

  it('should change genre by given data', () => {
    const genre = 'Action';
    const state = {
      genre: Genres.AllGenres.toString(),
    };

    expect(filmsProcess.reducer(state, changeGenre({ genre: genre })))
      .toEqual({
        genre: Genres.Action.toString()
      });
  });

});
