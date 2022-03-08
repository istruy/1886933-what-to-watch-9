import { ComponentType } from 'react';
import { useState } from 'react';
import { Film } from '../types/films';
import SmallMovieScreen from '../components/small-movie-screen/small-movie-screen';

type HOCProps = {
  renderPlayer: (film: Film) => void
};

function withFilmList<T>(Component: ComponentType<T>)
  : ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithFilmsList(props: ComponentProps): JSX.Element {
    const [activeFilmId, setActiveFilmId] = useState(-1);
    return (
      <Component
        {...props as T}
        renderPlayer={(film: Film) => (
          <SmallMovieScreen
            key={film.id}
            film={film}
            isActive={film.id === activeFilmId}
            onMouseOn={() => setActiveFilmId(activeFilmId === film.id ? -1 : film.id)}
            onMouseOff={() => setActiveFilmId(-1)}
          />
        )}
      />
    );
  }
  return WithFilmsList;
}

export default withFilmList;
