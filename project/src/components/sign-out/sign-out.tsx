import { Link } from 'react-router-dom';
// import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';

function SignOut(): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          to='/'
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default SignOut;
