import { Wrapper } from './style';

import { Link } from 'react-router-dom';

import Button from 'components/common/Button';

import { authStore } from 'services/store/auth';

import { ROUTES } from 'utils/constants/routes';

const Header = () => {
  const {
    actions: { authFail }
  } = authStore((state) => state);

  const onLogout = () => {
    authFail();
  };

  return (
    <>
      <Wrapper>
        <div className="left">
          <a href="javascript:void(0)" className="logo">
            <img src="/public/icons/logo.svg" alt="logo" />
          </a>
          <ul>
            <li>
              <Link to={ROUTES.home}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.reactQueryDemo}>User List</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <Button variant="primary" type="button" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
