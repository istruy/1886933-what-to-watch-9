import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  filmCount: number;
  genreFilm: string;
  releaseYearFilm: number;
  nameFilm: string;
}

function App({ filmCount, genreFilm, releaseYearFilm, nameFilm }: AppScreenProps): JSX.Element {
  return (
    <MainScreen filmCount={filmCount} genreFilm={genreFilm} releaseYearFilm={releaseYearFilm} nameFilm={nameFilm} />
  );
}

export default App;
