import { Film } from '../../types/films';
import { useState } from 'react';
import SmallMovieScreen from '../../components/small-movie-screen/small-movie-screen';

type FilmListProps = {
  films: Film[];
}

function FilmListScreen({ films }: FilmListProps): JSX.Element {

  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  return (
    <>
      {
        films.map((film) => <SmallMovieScreen key={film.id} film={film} isActive={film.id === activeFilmId} onMouseOn={setActiveFilmId} />)
      }
    </>
  );
}

export default FilmListScreen;
