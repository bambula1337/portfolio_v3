module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'max-len': ['error', { code: 9999 }],
    'global-require': 0,
    'vuejs-accessibility/label-has-for': [
      'warn',
      {
        components: ['VLabel'],
        controlComponents: ['VInput'],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
  },
};
