module.exports = {
  'extends': [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018, //指定ECMAScript支持的版本
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'env': {
    'browser': true,
    'node': true
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'quotes': [2, 'single'],
    'semi': [1, 'never'],
    'react-hooks/rules-of-hooks': 0,
    'react-hooks/exhaustive-deps': 0,
    'class-methods-use-this': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'jsx-a11y/alt-text': 0,
    'no-shadow': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-use-before-define': 0,
    'react/button-has-type': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'import/order': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/require-default-props': 0,
    'react/destructuring-assignment': 0,
    'no-nested-ternary': 0,
    'no-console': 0,
    'no-sequences': 0,
    'no-multi-assign': 0,
    'func-names': 0,
    'prefer-destructuring': 0,
    'consistent-return': 0,
    'no-useless-escape': 0,
    'no-new-func': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
