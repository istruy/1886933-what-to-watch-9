import { Film } from '../../types/films';
import { Genres } from '../../const';

type FilmListProps = {
  films: Film[];
  genre: string;
}

export function getHumanGenreFromUsefulGenre(genre: string): string {
  if (genre === 'Comedies') {
    return 'Comedy';
  } else if (genre === 'Dramas') {
    return 'Drama';
  } else if (genre === 'Thrillers') {
    return 'Thriller';
  } else if (genre === 'All Genres') {
    return 'AllGenres';
  } else {
    return genre;
  }
}

export default function FilmByGenreListScreen({ films, genre }: FilmListProps): Film[] {
  return genre === Genres.AllGenres ? films : films.filter((film) => film.genre === genre);
}

