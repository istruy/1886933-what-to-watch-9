import { Film } from '../../types/films';
import { Genres } from '../../const';
// import { Link, useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useAppDispatch } from '../../hooks';
// import { changeGenre } from '../../actions/actions';

type GenresListProps = {
  films: Film[];
}

function GenresListComponent({ films }: GenresListProps): JSX.Element {
  // const dispatch = useAppDispatch();

  const location = useLocation();
  const activeTab = location.hash.length === 0 ? Genres.All_Genres : location.hash.substring(1, location.hash.length) as Genres;

  const genresList = Array.from(new Set(films.map((film) => {
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
  //eslint-disable-next-line
  console.log(genresList);

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${activeTab === Genres.All_Genres ? 'catalog__genres-item--active' : ''}`}>
        {/* <Link to={`/#${Genres.All_Genres}`} className="catalog__genres-link">All genres</Link> */}
      </li>
      {
        genresList.map((genre) => {
          <li
            // className={`catalog__genres-item ${activeTab === genre ? 'catalog__genres-item--active' : ''}`}
            // key={genre}
            // onClick={() => dispatch(changeGenre)}
          >
            {/* <Link to={`/#${genre}`} className="catalog__genres-link">{genre}</Link> */}
          </li>;
        },
        )
      }
    </ul>
  );
}

export default GenresListComponent;
