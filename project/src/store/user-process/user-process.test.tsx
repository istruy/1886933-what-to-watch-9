import { AuthorizationStatus } from '../../const';
import { requireAuthorization, userProcess } from './user-process';

describe('Reducer: userProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
      });
  });

  it('should update authorization to AUTH', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
    };

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth
      });
  });

  it('should update authorization to NO_AUTH', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Auth,
    };

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth
      });
  });

});
