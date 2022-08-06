import { routes, RouteType } from './routes';

export const unprotectedRoutes: RouteType[] = routes.filter(
  route => !route.isProtected
);
