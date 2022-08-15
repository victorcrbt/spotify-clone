import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { isNotEmpty } from './utils/validations';
import { useLocalStorage } from './hooks';

type Props = {
  children: JSX.Element;
};

export function BootstrapApplication({ children }: Props) {
  const { i18n } = useTranslation();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const userLanguage = getItem('aeaea');

    if (isNotEmpty(userLanguage)) {
      i18n.changeLanguage(userLanguage);
    }
  }, []);

  return children;
}
