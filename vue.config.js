const electronBuilder = require('./build/electron-builder.config');

module.exports = {
  // configureWebpack: {
  //   target: 'node',
  // },
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    electronBuilder,
  },
};
