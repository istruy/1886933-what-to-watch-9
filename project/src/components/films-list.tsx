import { AuthorizationStatus } from '../const';
import SignOut from './sign-out/sign-out';
import Guest from './guest/guest';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const getActualPointForAuth = (authorizationStatus: AuthorizationStatus): JSX.Element =>
  authorizationStatus === AuthorizationStatus.Auth ? <SignOut /> : <Guest />;
