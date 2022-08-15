import React, { FC } from 'react';
import { TFuncKey, Namespace } from 'react-i18next';
import { TOptions, StringMap } from 'i18next';

declare global {
  namespace ExternalModules {
    namespace React {
      export type { FC };
    }

    namespace I18Next {
      export type { TOptions, StringMap };
    }

    namespace ReactI18Next {
      export type { TFuncKey, Namespace };
    }
  }
}
