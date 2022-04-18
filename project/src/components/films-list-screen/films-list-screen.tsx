import { Film } from '../../types/films';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { changeCountFilmCards } from '../../store/films-list-process/films-list-process';

type FilmListProps = {
  films: Film[];
  renderPlayer: (film: Film) => JSX.Element;
}

function FilmListScreen({ films, renderPlayer }: FilmListProps): JSX.Element {
  const { countFilmCards } = useAppSelector(({ FILMS_LIST }) => FILMS_LIST);

  const handleShowMore = () => {
    store.dispatch(changeCountFilmCards());
  };

  const getButtonShowMore = () =>
    countFilmCards <= films.length ?
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      </div>
      : '';

  return (
    <>
      <div className="catalog__films-list">
        {films.map((film, index) => {
          if (index < countFilmCards) {
            const renderFilm = renderPlayer(film);
            return renderFilm;
          }
          return '';
        })}
      </div>

      {getButtonShowMore()}
    </>
  );
}

export default FilmListScreen;
