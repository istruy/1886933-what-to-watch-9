import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute } from '../../const';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import { Film } from '../../types/films';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Review, Comment } from '../../types/films';
import { useAppSelector } from '../../hooks/';
// import { isCheckedAuth } from '../films-list';
import LoadingScreen from '../loading-screen/loading-screen';

type AppScreenProps = {
  films: Film[];
  comment: Comment;
  reviews: Review[];
}

function App({ films, reviews, comment }: AppScreenProps): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);

  // isCheckedAuth(authorizationStatus) ||
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
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
              <AddReviewScreen films={films} comment={comment} onSendMessage={() => {
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
              <MyListScreen films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MovieScreen films={films} comments={reviews} />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen films={films} />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        >
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
