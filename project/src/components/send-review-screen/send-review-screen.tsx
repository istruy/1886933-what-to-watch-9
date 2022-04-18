import { postReview } from '../../store/api-actions';
import { useRef, FormEvent, useEffect } from 'react';
import { Comment } from '../../types/films';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { STAR_COUNT } from '../../const';
import Rating from '../rating/rating';
import { useState } from 'react';
import { setCommentsPosted } from '../../store/films-data/films-data';

type ReviewProps = {
  filmId: string,
}

function SendReviewScreen({ filmId }: ReviewProps): JSX.Element {
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const { isCommentPosted } = useAppSelector(({ DATA }) => DATA);

  const ratings = Array.from(Array(STAR_COUNT).keys());

  const [countStar, setCountStar] = useState('');
  const [activePost, setActivePost] = useState(true);
  const [commentText, setCommentText] = useState('');

  const allStars = ratings.map((star) => <Rating key={star} rating={star} onChange={(starCount: string) => setCountStar(starCount)} />);

  const dispatch = useAppDispatch();

  const onSubmit = (comment: Comment) => {
    dispatch(postReview(filmId, comment));
  };

  useEffect(() => {
    if (commentText !== '') {
      if (Number(commentText.length) >= 50 && Number(commentText.length) <= 400 && countStar !== '') {
        setActivePost(() => false);
      } else {
        setActivePost(() => true);
      }
    } else {
      setActivePost(() => true);
    }
  }, [commentText, countStar]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (commentRef.current !== null && countStar !== '') {
      dispatch(setCommentsPosted);
      onSubmit({
        comment: commentRef.current.value,
        rating: countStar,
      });
    }
  };

  return (
    <form action=""
      className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {allStars}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={({ target }) => setCommentText(target.value)}
          ref={commentRef}
          disabled={isCommentPosted}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={activePost || isCommentPosted}
          >
            Post
          </button>
        </div>
      </div>
    </form >
  );
}

export default SendReviewScreen;
