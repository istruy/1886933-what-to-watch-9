import { Review } from '../../types/films';

type FilmReviewProps = {
  comments: Review[];
}

function FilmReviewComponent({ comments }: FilmReviewProps): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">

        {
          comments.map((comment) => {
            const date = new Date(comment.date);

            return (
              <div className="review" key={comment.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{comment.user}</cite>
                    <time className="review__date" dateTime={comment.date}>{date.getMonth} {date.getDay}, {date.getFullYear}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{comment.rating}</div>
              </div>
            );
          },
          )
        }

      </div>
    </div>
  );

}

export default FilmReviewComponent;
