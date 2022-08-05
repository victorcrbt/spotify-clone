import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from '@pages';
import { DefaultTemplate } from '@components';

type RouteType = {
  path: string;
  element: React.ReactNode;
  index?: boolean;
};

const unprotectedRoutes: RouteType[] = routes.filter(
  route => !route.isProtected
);

const protectedRoutes: RouteType[] = routes.filter(route => route.isProtected);

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultTemplate />}>
        {protectedRoutes.map(route => (
          <Route
            key={route.path}
            index={route.index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>

      <Route>
        {unprotectedRoutes.map(route => (
          <Route
            key={route.path}
            index={route.index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);
