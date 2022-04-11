import { ComponentType } from 'react';
import { useState } from 'react';
import { Film } from '../types/films';
import SmallFilmScreen from '../components/small-movie-screen/small-film-screen';

type HOCProps = {
  renderPlayer: (film: Film) => void
};

function withMovieList<T>(Component: ComponentType<T>)
  : ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithMoviesList(props: ComponentProps): JSX.Element {
    const [activeMovieId, setActiveMovieId] = useState(-1);

    return (
      <Component
        {...props as T}
        renderPlayer={(film: Film) => (
          <SmallFilmScreen
            key={film.id}
            film={film}
            isActive={film.id === activeMovieId}
            onMouseOn={() => setActiveMovieId(activeMovieId === film.id ? -1 : film.id)}
            onMouseOff={() => setActiveMovieId(-1)}
          />
        )}
      />
    );
  }
  return WithMoviesList;
}

export default withMovieList;
