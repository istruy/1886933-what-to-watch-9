// import { Fragment } from 'react';
// import { useParams } from 'react-router-dom';

type VideoPlayerProps = {
  src: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  poster: string;
}

function VideoPlayerScreen({ src, poster, videoRef }: VideoPlayerProps): JSX.Element {
  return (
    <video width="280" height="175" src={src} ref={videoRef} muted poster={poster} ></video>
  );
}

export default VideoPlayerScreen;
