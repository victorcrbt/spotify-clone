import React, { FC } from 'react';

declare global {
  namespace ExternalModules {
    namespace React {
      export type { FC };
    }
  }
}
