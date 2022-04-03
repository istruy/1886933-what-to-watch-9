import { Film } from '../../types/films';
import { Genres, GenresNames } from '../../const';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeGenre, getFilmsList } from '../../actions/actions';
import { getHumanGenreFromUsefulGenre } from '../films-by-genre/films-by-genre';

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

  const onClickGenre = (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    let genre = evt.currentTarget.children[0].innerHTML;
    genre = getHumanGenreFromUsefulGenre(genre);
    dispatch(changeGenre({ genre }));
    dispatch(getFilmsList({ genre }));
  };

  return (
    <ul className="catalog__genres-list">
      <li
        className={`catalog__genres-item ${genreFilm === Genres.AllGenres.toString() ? 'catalog__genres-item--active' : ''}`}
        onClick={onClickGenre}
      >
        <Link to={`/#${Genres.AllGenres}`} className="catalog__genres-link">{GenresNames[Genres.AllGenres]}</Link>
      </li>
      {
        genresList.map((filmGenre) => {
          const currentGenrefilm = filmGenre;
          return (
            <li
              className={`catalog__genres-item ${genreFilm === getHumanGenreFromUsefulGenre(currentGenrefilm) ? 'catalog__genres-item--active' : ''}`}
              key={currentGenrefilm}
              onClick={onClickGenre}
            >
              <Link to={`/#${currentGenrefilm}`} className="catalog__genres-link">{currentGenrefilm}</Link>
            </li>
          );
        },
        )
      }
    </ul>
  );
}

export default GenresListComponent;
