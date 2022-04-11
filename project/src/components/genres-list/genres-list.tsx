import { Film } from '../../types/films';
import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/films-list-process/films-list-process';
import { getFilmsList } from '../../store/films-data/films-data';
import { getHumanGenreFromUsefulGenre } from '../films-by-genre/films-by-genre';
import GenresItems from './genres-items';
import { useCallback } from 'react';

type GenresListProps = {
  allFilms: Film[];
  genreFilm: string;
}

function GenresListComponent({ allFilms, genreFilm }: GenresListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const genresList = Array.from(new Set(allFilms.map((film) => {
    if (film.genre === 'Comedy') {
      return 'Comedies';
    } else if (film.genre === 'Drama') {
      return 'Dramas';
    } else if (film.genre === 'Thriller') {
      return 'Thrillers';
    } else {
      return film.genre;
    }
  })));

  const memoizedOnClickGenre = useCallback((evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    let genre = evt.currentTarget.children[0].innerHTML;
    genre = getHumanGenreFromUsefulGenre(genre);
    dispatch(changeGenre({ genre }));
    dispatch(getFilmsList({ genre }));
  }, [genreFilm]);

  return (
    <GenresItems
      genreFilm={genreFilm}
      genreList={genresList}
      onClickGenre={memoizedOnClickGenre}
    />
  );
}

export default GenresListComponent;
