import { Review } from '../../types/films';
import dayjs from 'dayjs';

type FilmReviewProps = {
  comments: Review[];
}

const getReview = (comments: Review[]): JSX.Element => (
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
);

function FilmReviewComponent({ comments }: FilmReviewProps): JSX.Element {
  const firstColComments: Review[] = comments.slice(0, Math.trunc(comments.length / 2));
  const secondColComments: Review[] = comments.slice(Math.trunc(comments.length / 2) + 1);
  return (
    <div className="film-card__reviews film-card__row">
      {getReview(firstColComments)}
      {getReview(secondColComments)}
    </div >
  );
}

export default FilmReviewComponent;
