module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  extends: "airbnb",

  env: {
    browser: true,
    jest: true,
    es6: true
  },

  plugins: [
    'react',
    'jsx-a11y',
    "import",
  ],

  // check if imports actually resolve
  settings: {
    'import/resolver': 'webpack',
  },

  // add your custom rules here
  rules: {

    // don't require .js extension when importing
    'import/extensions': ['error', 'always', { 'js': 'never' }],

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,

    // sanity into react linter rules
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'react/prop-types': [1, { 'skipUndeclared': true }],

    // make jsx-a11y work nice with react router
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'components': [ 'Link' ],
      'specialLink': [ 'to', 'hrefLeft', 'hrefRight' ],
      'aspects': [ 'noHref', 'invalidHref', 'preferButton' ],
    }],
  }
}
