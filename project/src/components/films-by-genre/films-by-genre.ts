import { Film } from '../../types/films';
import { Genres } from '../../const';

type FilmListProps = {
  films: Film[];
  genre: string;
}

export default function FilmByGenreListScreen({ films, genre }: FilmListProps): Film[] {
  return genre === Genres.All_Genres ? films : films.filter((film) => film.genre === genre);
}
