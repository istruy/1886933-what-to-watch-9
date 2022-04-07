import { Film } from '../../types/films';
import VideoPlayerScreen from '../video-player/video-player-element';
import { useRef, useEffect } from 'react';

type SmallMovieScreenProps = {
  film: Film;
  isActive: boolean;
  onMouseOn: () => void;
  onMouseOff: () => void;
}

function SmallMovieScreen({ film, isActive, onMouseOn, onMouseOff }: SmallMovieScreenProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout = setTimeout(() => 1, 1000);

    if (videoRef.current === null) {
      return;
    }
    if (isActive) {
      timer = setTimeout(() => { videoRef.current && videoRef.current.play(); }, 1000);
      return;
    }
    videoRef.current.load();
    clearTimeout(timer);
  }, [isActive]);

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={onMouseOn}
      onMouseLeave={onMouseOff}
    >
      <div className="small-film-card__image">
        <VideoPlayerScreen
          src={film.previewVideoLink}
          poster={film.posterImage}
          videoRef={videoRef}
        />
      </div>
      <h3 className="small-film-card__title">
        <a href={`/films/${film.id}`} className="small-film-card__link">
          {film.name}
        </a>
      </h3>
    </article>
  );
}

export default SmallMovieScreen;
