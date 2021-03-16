module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic' /* Evita ter que importar o React em todo arquivo */
    }],
  ]
};
