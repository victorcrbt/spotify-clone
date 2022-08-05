import { Module } from './map-modules-to-pages.helper';

type Params = {
  pages: Module<Core.AppPage>[];
};

export function mapPagesToRoutes<ModuleType>({ pages }: Params) {
  return pages.map(file => {
    const pagePath = file.module[file.name].path;

    if (!pagePath) {
      throw new Error(
        `Every page must have a "path" property, and the page ${file.name} does not contain.`
      );
    }

    const module = file.module[file.name];

    return {
      path: module.path,
      element: module({}),
      isProtected: module.isProtected,
    };
  });
}
