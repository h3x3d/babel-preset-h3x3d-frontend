module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-es2016'),
    require('babel-preset-es2017'),
    require('babel-preset-react')
  ],
  plugins: [
    require('babel-plugin-transform-class-properties'),
    [require('babel-plugin-transform-builtin-extend').default, { globals: ['Error'] }],
    require('babel-plugin-transform-runtime'),
  ]
};
