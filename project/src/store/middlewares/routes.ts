import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { reducer } from '../../actions/reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'filmsList/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
