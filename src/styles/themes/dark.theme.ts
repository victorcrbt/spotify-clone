import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  color: {
    primary: {
      default: {
        main: '#1DB954',
        contrast: '#ffffff',
      },
      light: {
        main: '#83eca8',
        contrast: '#222222',
      },
      dark: {
        main: '#0f612c',
        contrast: '#ffffff',
      },
    },
    secondary: {
      default: {
        main: '#BA30AA',
        contrast: '#222222',
      },
      light: {
        main: '#f0c6eb',
        contrast: '#222222',
      },
      dark: {
        main: '#922685',
        contrast: '#222222',
      },
    },
    tertiary: {
      default: {
        main: '#BA3E3A',
        contrast: '#222222',
      },
      light: {
        main: '#d88683',
        contrast: '#222222',
      },
      dark: {
        main: '#6d2522',
        contrast: '#151515',
      },
    },
    background: {
      default: {
        main: '#191414',
        contrast: '#fff',
      },
      light: {
        main: '#221b1b',
        contrast: '#fff',
      },
      dark: {
        main: '#000',
        contrast: '#fff',
      },
    },
    text: {
      default: {
        main: '#fff',
        contrast: '#191414',
      },
      light: {
        main: '#fff',
        contrast: '#221b1b',
      },
      dark: {
        main: '#fff',
        contrast: '#000',
      },
    },
    success: {
      default: {
        main: '#08cc50',
        contrast: '#fff',
      },
      light: {
        main: '#3bf780',
        contrast: '#03491d',
      },
      dark: {
        main: '#06933a',
        contrast: '#cefddf',
      },
    },
    danger: {
      default: {
        main: '#c73838',
        contrast: '#fff',
      },
      light: {
        main: '#d87474',
        contrast: '#8b2727',
      },
      dark: {
        main: '#772222',
        contrast: '#e9afaf',
      },
    },
    info: {
      default: {
        main: '#5983f0',
        contrast: '#fff',
      },
      light: {
        main: '#8aa8f4',
        contrast: '#0b2975',
      },
      dark: {
        main: '#1449d2',
        contrast: '#8aa8f4',
      },
    },
    warning: {
      default: {
        main: '#eb8149',
        contrast: '#fff',
      },
      light: {
        main: '#f0a075',
        contrast: '#5c270a',
      },
      dark: {
        main: '#cf5717',
        contrast: '#f7d0ba',
      },
    },
  },

  borderRadius: {
    none: '0px',
    default: '8px',
    xxs: '1px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
    xxl: '64px',
    huge: '128px',
  },

  borderWidth: {
    none: '0px',
    xxs: '0.5px',
    xs: '1px',
    sm: '1.5px',
    md: '2px',
    lg: '2.5px',
    xl: '3px',
    xxl: '3.5px',
    huge: '4px',
  },

  fontSize: {
    default: '14px',
    xxs: '8px',
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    huge: '32px',
  },

  spacing: {
    none: '0px',
    xxs: '2px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    huge: '64px',
  },

  typographies: {
    h1: {
      'font-size': '32px',
      'font-weight': 'bold',
      'margin-bottom': '16px',
    },
    h2: {
      'font-size': '28px',
      'font-weight': 'bold',
      'margin-bottom': '16px',
    },
    h3: {
      'font-size': '24px',
      'font-weight': 'bold',
      'margin-bottom': '16px',
    },
    h4: {
      'font-size': '20px',
      'font-weight': 'bold',
      'margin-bottom': '8px',
    },
    h5: {
      'font-size': '16px',
      'font-weight': 'normal',
      'margin-bottom': '8px',
    },
    h6: {
      'font-size': '12px',
      'font-weight': 'normal',
      'margin-bottom': '4px',
    },
    paragraph: {
      'font-size': '14px',
      'font-weight': 'normal',
      'margin-bottom': '8px',
    },
  },
};
