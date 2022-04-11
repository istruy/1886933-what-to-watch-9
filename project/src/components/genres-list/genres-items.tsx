import { Genres, GenresNames } from '../../const';
import { Link } from 'react-router-dom';
import { getHumanGenreFromUsefulGenre } from '../films-by-genre/films-by-genre';

type GenresItemsProps = {
  genreFilm: string;
  genreList: string[];
  onClickGenre: (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

function GenresItems({ genreFilm, genreList, onClickGenre }: GenresItemsProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      <li
        className={`catalog__genres-item ${genreFilm === Genres.AllGenres.toString() ? 'catalog__genres-item--active' : ''}`}
        onClick={onClickGenre}
      >
        <Link to={`/#${Genres.AllGenres}`} className="catalog__genres-link">{GenresNames[Genres.AllGenres]}</Link>
      </li>
      {
        genreList.map((filmGenre) => {
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

export default GenresItems;
