import { Genres, GenresNames } from '../../const';
import { Link } from 'react-router-dom';

type GenresItemsProps = {
  genreFilm: string;
  genreList: string[];
  onClickGenre: (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  getHumanGenre: (string: string) => string;
}

function GenresItems({ genreFilm, genreList, onClickGenre, getHumanGenre }: GenresItemsProps): JSX.Element {
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
              className={`catalog__genres-item ${genreFilm === getHumanGenre(currentGenrefilm) ? 'catalog__genres-item--active' : ''}`}
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
