import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DefaultTemplate } from '@components';

import { protectedRoutes, unprotectedRoutes } from './routes';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultTemplate />}>
        {protectedRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      <Route>
        {unprotectedRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);
