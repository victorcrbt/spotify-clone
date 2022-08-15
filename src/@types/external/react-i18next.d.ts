import 'react-i18next';

import { ptBR, enUS } from '../../i18n/locales';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: I18N.TranslationKeys;
  }
}
