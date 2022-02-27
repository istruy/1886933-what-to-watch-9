import { Film } from '../../types/films';
import { Link } from 'react-router-dom';

type SmallMovieScreenProps = {
  film: Film;
  isActive: boolean;
  onMouseOn: (id: number | null) => void;
}

function SmallMovieScreen({ film, isActive, onMouseOn }: SmallMovieScreenProps): JSX.Element {
  const { name, posterImage } = film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175"
          onMouseOver={() => onMouseOn(film.id)}
          onMouseLeave={() => onMouseOn(null)}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallMovieScreen;
