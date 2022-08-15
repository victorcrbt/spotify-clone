declare namespace TranslatorComponent {
  type Props = {
    path: TFuncKey<Namespace, undefined> | TemplateStringsArray extends infer A
      ? A
      : never;
    namespace?: I18N.TranslationNamespaces;
    options?: TOptions<StringMap>;
    variables?: {
      [key: string]: any;
    };
  };

  type TOptions<Map> = ExternalModules.I18Next.TOptions<Map>;
  type StringMap = ExternalModules.I18Next.StringMap;
  type Namespace = ExternalModules.ReactI18Next.Namespace;
  type TFuncKey<NS, Prefix> = ExternalModules.ReactI18Next.TFuncKey<NS, Prefix>;
}
