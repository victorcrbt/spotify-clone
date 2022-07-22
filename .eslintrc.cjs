module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
