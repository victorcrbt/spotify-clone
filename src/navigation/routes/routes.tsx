import * as pages from '@pages';

export type RouteType = {
  path: string;
  isProtected?: boolean;
  element: React.ReactNode;
};

export const routes: RouteType[] = Object.values(pages).map(Page => ({
  element: <Page />,
  path: Page.path,
  isProtected: Page.isProtected,
}));
