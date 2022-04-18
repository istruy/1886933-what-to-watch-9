type RatingProps = {
  rating: number,
  onChange: (value: string) => void,
}

function Rating({ rating, onChange }: RatingProps): JSX.Element {

  return (
    <>
      <input
        className="rating__input"
        id={`star-${rating}`}
        type="radio"
        name="rating"
        value={`${rating}`}
        onChange={(evt) => onChange(evt.target.value)}
      />
      <label className="rating__label" htmlFor={`star-${rating}`}>Rating ${rating}</label>
    </>
  );
}

export default Rating;
