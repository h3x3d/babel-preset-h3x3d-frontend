module.exports = {
  presets: [
    ['latest', { es2015: { modules: false } }],
    'react'
  ],
  plugins: [
    'transform-class-properties',
    ['transform-builtin-extend', { globals: ['Error'] }],
    'transform-runtime',
  ]
};
