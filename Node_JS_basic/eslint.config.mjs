import jest from 'eslint-plugin-jest';
import airbnbBase from 'eslint-config-airbnb-base';

export default [
    {
        files: ['*.js'],
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
                jest: true,
            },
        },
        plugins: {
            jest,
        },
        rules: {
            'max-classes-per-file': 'off',
            'no-underscore-dangle': 'off',
            'no-console': 'off',
            'no-shadow': 'off',
            'no-restricted-syntax': [
                'error',
                'LabeledStatement',
                'WithStatement',
            ],
        },
        ignores: ['babel.config.js'],
    },
    airbnbBase,
];
