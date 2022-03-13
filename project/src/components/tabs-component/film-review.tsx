import { Review } from '../../types/films';
import dayjs from 'dayjs';

type FilmReviewProps = {
  comments: Review[];
}

function FilmReviewComponent({ comments }: FilmReviewProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">

        {
          comments.map((comment) => {
            const dayNow = dayjs(comment.date);
            return (
              <div className="review" key={comment.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    <time
                      className="review__date"
                      dateTime={dayNow.format('YYYY-MM-DD')}
                    >
                      {dayNow.format('MMMM')} {dayNow.format('DD')}, {dayNow.format('YYYY')}
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{comment.rating}</div>
              </div>
            );
          },
          )
        }
      </div>
    </div >
  );
}

export default FilmReviewComponent;
