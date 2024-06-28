import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from 'utils/constants/routes';

import ReactQueryDemo from './ReactQueryDemo';

// import Home from './Home';

const Layout = lazy(() => import('../components/layout'));
// const SignIn = lazy(() => import('./SignIn'));
const Home = lazy(() => import('./Home'));

const Routing = () => {
  return (
    <Routes>
      {/* <Route path={ROUTES.signIn} element={<SignIn />} /> */}
      <Route path={ROUTES.default} element={<Layout />}>
        <Route index path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.reactQueryDemo} element={<ReactQueryDemo />} />
        <Route path={ROUTES.default} element={<Navigate replace to={ROUTES.home} />} />
      </Route>
      <Route path="*" element={<Navigate replace to={ROUTES.default} />} />
    </Routes>
  );
};

export default Routing;
