import { Wrapper } from './style';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="header">
          <Link to="/task-board" className="logo">
            <img src="/public/icons/logo.svg" alt="logo" />
          </Link>
          <ul>
            <li>
              <Link to="/task-board">Task Board</Link>
            </li>
            <li>
              <Link to="/developers">Developers</Link>
            </li>
            <li>
              <Link to="/new-task">New Task</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
