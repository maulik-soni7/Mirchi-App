import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from 'utils/constants/routes';

const Layout = lazy(() => import('../components/layout'));
const TaskBoard = lazy(() => import('../pages/TaskBoard/TaskBoard'));
const DeveloperList = lazy(() => import('../pages/DeveloperList/DeveloperList'));
const TaskForm = lazy(() => import('../pages/TaskForm/TaskForm'));

const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.default} element={<Layout />}>
        <Route index path={ROUTES.taskBoard} element={<TaskBoard />} />
        <Route index path={ROUTES.developers} element={<DeveloperList />} />
        <Route index path={ROUTES.taskForm} element={<TaskForm />} />
        <Route path={ROUTES.default} element={<Navigate replace to={ROUTES.taskBoard} />} />
      </Route>
      <Route path="*" element={<Navigate replace to={ROUTES.default} />} />
    </Routes>
  );
};

export default Routing;
