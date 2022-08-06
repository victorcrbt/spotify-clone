import { ROUTES } from '@constants';

export const Search: Core.AppPage = () => <h1>search</h1>;

Search.path = ROUTES.search;
Search.isProtected = true;
