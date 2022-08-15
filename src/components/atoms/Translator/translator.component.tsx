import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Props = TranslatorComponent.Props;

export const Translator: FC<Props> = ({
  path,
  namespace = 'words',
  variables,
  options,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {t(path, {
        ...options,
        ...variables,
        ns: namespace,
      })}
    </>
  );
};
