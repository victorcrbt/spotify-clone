export type Module<ModuleType> = {
  name: string;
  module: {
    [key: string]: ModuleType;
  };
};

type Params<ModuleType> = {
  modules: Module<ModuleType>[];
};

export function mapModulesToPages<ModuleType>({ modules }: Params<ModuleType>) {
  return modules.map(file => ({
    name: file.name,
    module: file.module,
  }));
}
