/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export * from './Main';
export * from './Search';

// import { mapModulesToPages, mapPagesToRoutes } from '@utils/helpers';

// const modules = import.meta.glob('./*/index.ts');

// const mappedModules: Array<{
//   name: string;
//   module: {
//     [key: string]: Core.AppPage;
//   };
// }> = [];

// for (const path in modules) {
//   const splittedPath = path.split('/');
//   const name = splittedPath[1];

//   mappedModules.push({
//     module: await import(path),
//     name,
//   });
// }

// const pages = mapModulesToPages<Core.AppPage>({
//   modules: mappedModules,
// });

// export const routes = mapPagesToRoutes({ pages });
