import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import { Film } from '../../types/films';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Review, Comment } from '../../types/films';

type AppScreenProps = {
  film: Film;
  films: Film[];
  comment: Comment;
  review: Review[];
}

function App({ film, films, review, comment }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen film={film} films={films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
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
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListScreen films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MovieScreen films={films} comments={review} />}
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
