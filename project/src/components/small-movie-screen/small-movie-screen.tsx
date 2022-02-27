import { Film } from '../../types/films';
import { Link } from 'react-router-dom';

type SmallMovieScreenProps = {
  filmInfo: Film;
  isActive: boolean;
  onMouseOn: (id: number | null) => void;
}

function SmallMovieScreen({ filmInfo, isActive, onMouseOn }: SmallMovieScreenProps): JSX.Element {
  const { name, posterImage } = filmInfo;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175"
          onMouseOver={() => onMouseOn(filmInfo.id)}
          onMouseLeave={() => onMouseOn(null)}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${filmInfo.id}`} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallMovieScreen;
