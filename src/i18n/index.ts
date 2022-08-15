import i18n, { InitOptions, ResourceLanguage } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { enUS, ptBR } from './locales';

const options: InitOptions = {
  resources: {
    'pt-BR': ptBR,
    'en-US': enUS,
  },
  fallbackLng: 'pt-BR',
  defaultNS: 'words',
};

i18n.use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
