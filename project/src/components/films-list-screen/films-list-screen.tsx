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
      {/* eslint-disable */}
      {
        films.map((film) => <SmallMovieScreen
          filmInfo={film}
          isActive={film.id === activeFilmId}
          onMouseOn={setActiveFilmId}
        />)
      }
      {/* eslint-enable */}
    </>

  );
}

export default FilmListScreen;
