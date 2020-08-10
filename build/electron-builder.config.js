const webpack = require('webpack');
const path = require('path');

const builderOptions = {
  appId: 'com.electron-vue-base',

  // LINUX BUILD CONFIG
  linux: {
    target: ['AppImage'],
    icon: './icon.png',
    category: 'Development',
  },

  // WINDOWS BUILD CONFIG
  win: {
    target: ['nsis', 'zip'],
    icon: './icon.ico', // use .ico for Windows Icon
  },
  nsis: {
    oneClick: 'false',
    allowToChangeInstallationDirectory: 'true',
    perMachine: 'true',
  },
};

function fixPostgresWebpack(config) {
  config.plugin('fixPgNative').use(webpack.IgnorePlugin, [/^pg-native$/]);
}

function removeWarnings(config) {
  config
    .plugin('warningSequelizeFix')
    .use(webpack.ContextReplacementPlugin, [/sequelize(\\|\/)/, path.resolve(__dirname)]);
  config.plugin('warningAnyPromiseFix').use(webpack.ContextReplacementPlugin, [/any-promise/]);
}

module.exports = {
  chainWebpackMainProcess: config => {
    fixPostgresWebpack(config);
    removeWarnings(config);
  },

  builderOptions,
};
