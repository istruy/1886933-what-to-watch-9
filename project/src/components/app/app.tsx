import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  genreFilm: string;
  releaseYearFilm: number;
  nameFilm: string;
}

function App({ genreFilm, releaseYearFilm, nameFilm }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen genreFilm={genreFilm} releaseYearFilm={releaseYearFilm} nameFilm={nameFilm} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <AddReviewScreen filmName={nameFilm} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MovieScreen />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path="*"
          element={
            <Fragment>
              <h1>
                404
                <br />
                <small>Page not found</small>
              </h1>
              <Link to={AppRoute.Main}>Go to main page</Link>
            </Fragment>
          }
        >
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
