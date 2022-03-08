// import { Fragment } from 'react';
// import { useParams } from 'react-router-dom';

type VideoPlayerProps = {
  // isPlay: boolean;
  src: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  poster: string;
}

function VideoPlayerScreen({ src, poster, videoRef }: VideoPlayerProps): JSX.Element {
  // const filmId = useParams();

  // const [isLoading, setIsLoading] = useState(true);
  // const [isPlaying, setautoPlaying] = useState(isPlay);

  // const videoRef = useRef<HTMLVideoElement | null>(null);


  // useEffect(() => {
  //   if (videoRef.current === null) {
  //     return;
  //   }

  //   if (isPlaying) {
  //     videoRef.current.play();
  //     return;
  //   }

  //   videoRef.current.pause();
  // }, [isPlaying]);

  return (
    <video width="280" height="175" src={src} ref={videoRef} muted poster={poster} ></video>
  );

}

export default VideoPlayerScreen;
