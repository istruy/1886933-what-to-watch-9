import { Film } from '../../types/films';

type FilmListProps = {
  films: Film[];
  renderPlayer: (film: Film) => JSX.Element;
}

function FilmListScreen({ films, renderPlayer }: FilmListProps): JSX.Element {

  return (
    <>
      {
        films.map((film) => (
          renderPlayer(film)
        ))
      }
    </>
  );
}

export default FilmListScreen;
