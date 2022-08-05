declare namespace Core {
  export interface AppPage<Props = {}> extends ExternalModules.React.FC<Props> {
    path: string;
    isProtected?: boolean;
    initialProps?: any;
  }
}
