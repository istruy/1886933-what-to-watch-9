import { Film } from '../../types/films';

type FilmDetailsProps = {
  film: Film;
}

function FilmOverviewComponent({ film }: FilmDetailsProps): JSX.Element {

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring:
            {/* {film.starring[0]},
            {film.starring[1]},
            {film.starring[2]},
            {film.starring[3]} */}

            {film.starring.map((actor, index) => {
              if (index === 0) {
                return ` ${actor}`;
              }
              if (index < 4) {
                return `, ${actor} `;
              }
            })}


            and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverviewComponent;
