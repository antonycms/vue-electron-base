const electronBuilder = require('./build/electron-builder.config');

module.exports = {
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    electronBuilder,
  },
};
