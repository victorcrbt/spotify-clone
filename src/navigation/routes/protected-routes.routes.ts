import { routes, RouteType } from './routes';

export const protectedRoutes: RouteType[] = routes.filter(
  route => route.isProtected
);
