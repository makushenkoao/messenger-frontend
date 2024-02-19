module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
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
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'makushenkoao-plugin',
        'unused-imports',
        'import',
    ],
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-shadow': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'no-unused-vars': 'warn',
        'no-undef': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-unresolved': 'off',
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',
        'no-return-await': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'arrow-body-style': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 120,
            },
        ],
        'makushenkoao-plugin/path-checker': ['error', { alias: '@' }],
        'makushenkoao-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'makushenkoao-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'react/no-unstable-nested-components': 'warn',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [],
};
