import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute } from '../../const';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/movie-screen/movie-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { useAppSelector } from '../../hooks/';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AuthorizationStatus } from '../../const';

function App(): JSX.Element {
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const { isDataLoaded } = useAppSelector(({ DATA }) => DATA);

  if (authorizationStatus === AuthorizationStatus.Unknown || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewScreen onSendMessage={() => {
                throw new Error('Function \'onSendMessage\' isn\'t implemented.');
              }}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmScreen />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        >
        </Route>
      </Routes>
    </HistoryRouter >
  );
}

export default App;
